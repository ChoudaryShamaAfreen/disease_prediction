const twilio = require('twilio');
require('dotenv').config();

// Create Twilio client
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/**
 * Send medication reminder via SMS
 * @param {string} to - Recipient phone number
 * @param {string} medicationName - Name of the medication
 * @param {string} time - Time to take the medication
 * @returns {Promise} - Resolves with info about the sent message
 */
const sendMedicationReminderSMS = async (to, medicationName, time) => {
  // Format time for display (convert from 24h to 12h format if needed)
  const timeDisplay = new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const message = `Time to take ${medicationName} at ${timeDisplay}. Stay healthy!`;

  try {
    const result = await client.messages.create({
      body: message,
      to: to,
      from: process.env.TWILIO_PHONE_NUMBER
    });
    console.log(`SMS sent: ${result.sid}`);
    return result;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
};

/**
 * Send confirmation SMS after setting up reminders
 * @param {string} to - Recipient phone number
 * @param {Array} medications - Array of medication objects with name and time
 * @returns {Promise} - Resolves with info about the sent message
 */
const sendConfirmationSMS = async (to, medications) => {
  const medicationsList = medications.map(med => {
    const timeDisplay = new Date(`2000-01-01T${med.time}`).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    return `${med.name} at ${timeDisplay}`;
  }).join(', ');

  const message = `Your medication reminders have been set up for: ${medicationsList}. You will receive reminders at the scheduled times.`;

  try {
    const result = await client.messages.create({
      body: message,
      to: to,
      from: process.env.TWILIO_PHONE_NUMBER
    });
    console.log(`Confirmation SMS sent: ${result.sid}`);
    return result;
  } catch (error) {
    console.error('Error sending confirmation SMS:', error);
    throw error;
  }
};

module.exports = {
  sendMedicationReminderSMS,
  sendConfirmationSMS
};