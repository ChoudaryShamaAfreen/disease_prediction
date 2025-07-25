const nodemailer = require('nodemailer');
require('dotenv').config();

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Allows self-signed certificates
  }
});

/**
 * Send medication reminder email
 * @param {string} to - Recipient email address
 * @param {string} medicationName - Name of the medication
 * @param {string} time - Time to take the medication
 * @returns {Promise} - Resolves with info about the sent email
 */
const sendMedicationReminder = async (to, medicationName, time) => {
  // Format time for display (convert from 24h to 12h format if needed)
  const timeDisplay = new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const mailOptions = {
    from: `"Medication Reminder" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Time to take ${medicationName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #2f80ed; text-align: center;">Medication Reminder</h2>
        <p>Hello,</p>
        <p>This is a reminder to take your medication:</p>
        <div style="background-color: #f5f9ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Medication:</strong> ${medicationName}</p>
          <p><strong>Time:</strong> ${timeDisplay}</p>
        </div>
        <p>Stay healthy!</p>
        <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
          This is an automated reminder from HealthPlus Medication Reminder System.
        </p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

/**
 * Send confirmation email after setting up reminders
 * @param {string} to - Recipient email address
 * @param {Array} medications - Array of medication objects with name and time
 * @returns {Promise} - Resolves with info about the sent email
 */
const sendConfirmationEmail = async (to, medications) => {
  const medicationsList = medications.map(med => {
    const timeDisplay = new Date(`2000-01-01T${med.time}`).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    return `<li><strong>${med.name}</strong> at ${timeDisplay}</li>`;
  }).join('');

  const mailOptions = {
    from: `"Medication Reminder" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Medication Reminders Configured',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #2f80ed; text-align: center;">Medication Reminders Configured</h2>
        <p>Hello,</p>
        <p>Your medication reminders have been successfully set up. You will receive reminders for the following medications:</p>
        <ul style="background-color: #f5f9ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
          ${medicationsList}
        </ul>
        <p>Stay healthy!</p>
        <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
          This is an automated message from HealthPlus Medication Reminder System.
        </p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};

module.exports = {
  sendMedicationReminder,
  sendConfirmationEmail
};