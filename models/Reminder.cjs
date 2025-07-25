const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  medications: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    time: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true,
      min: 1
    },
    isDaily: {
      type: Boolean,
      default: false
    },
    // Store the next scheduled reminder time
    nextReminder: {
      type: Date
    },
    endDate: {
      type: Date,
      required: true
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reminder', ReminderSchema);