// combined-server.cjs
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();



// Import models and services for Medication Reminder
const Reminder = require('./models/Reminder.cjs');
const { sendConfirmationEmail } = require('./utils/emailService.cjs');
const { scheduleReminder, scheduleAllReminders } = require('./utils/schedulerService.cjs');

// Import Gemini (Google GenAI)
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  scheduleAllReminders()
    .then(jobs => console.log(`Scheduled ${jobs.length} reminder jobs on startup`))
    .catch(err => console.error('Error scheduling reminders on startup:', err));
})
.catch(err => console.error('MongoDB connection error:', err));

// Root route for medication reminder UI
app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'medreminder.html'));
  res.sendFile('medreminder.html', { root: path.join(__dirname, 'public') });
});

// Reminder API route
app.post('/api/reminders', async (req, res) => {
  try {
    const { email, phoneNumber, medications } = req.body;

    if (!email || !phoneNumber || !medications || !medications.length) {
      return res.status(400).json({ success: false, message: 'Invalid input data' });
    }

    const medicationsData = medications.map(med => {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + med.duration);
      return { ...med, endDate };
    });

    let reminder = await Reminder.findOne({ email });
    if (reminder) {
      reminder.medications = medicationsData;
      reminder.phoneNumber = phoneNumber;
      await reminder.save();
    } else {
      reminder = new Reminder({ email, phoneNumber, medications: medicationsData });
      await reminder.save();
    }

    medicationsData.forEach(med => {
      scheduleReminder({
        email,
        phoneNumber,
        medication: med.name,
        time: med.time,
        isDaily: med.isDaily,
        endDate: med.endDate
      });
    });

    try {
      await sendConfirmationEmail(email, medicationsData);
      res.status(200).json({ success: true, message: 'Reminders set successfully' });
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      res.status(200).json({
        success: true,
        message: 'Reminders saved but email notification failed.'
      });
    }
  } catch (error) {
    console.error('Error saving reminder:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Gemini Chatbot API route
app.post('/gemini', async (req, res) => {
  const prompt = req.body.prompt;

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = result?.response?.text() || 'No response generated.';
    res.send(response);
  } catch (err) {
    console.error('Gemini API error:', err);
    res.status(500).send('Error generating response');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
