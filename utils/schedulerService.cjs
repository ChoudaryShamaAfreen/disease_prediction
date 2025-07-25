const schedule = require('node-schedule');
const { sendMedicationReminder } = require('./emailService.cjs');
const { sendMedicationReminderSMS } = require('./smsService.cjs');
const Reminder = require('../models/Reminder.cjs');

/**
 * Schedule a medication reminder
 * @param {string} email - User's email address
 * @param {string} medicationName - Name of the medication
 * @param {string} time - Time to take medication (HH:MM format)
 * @returns {Object} - The scheduled job
 */
const scheduleReminder = ({ email, phoneNumber, medication, time, isDaily, endDate }) => {
  // Parse the time string (HH:MM)
  const [hours, minutes] = time.split(':').map(Number);
  
  // Create a rule for the scheduler
  const rule = new schedule.RecurrenceRule();
  rule.hour = hours;
  rule.minute = minutes;
  
  // If not daily, set end date
  if (!isDaily) {
    rule.end = new Date(endDate);
  }
  
  // Schedule the job
  const job = schedule.scheduleJob(rule, async function() {
    try {
      console.log(`Sending reminders for ${medication} to ${email} and ${phoneNumber}`);
      await Promise.all([
        sendMedicationReminder(email, medication, time),
        sendMedicationReminderSMS(phoneNumber, medication, time)
      ]);
      
      // Update the next reminder time in the database
      const nextReminder = new Date();
      nextReminder.setDate(nextReminder.getDate() + 1); // Set for tomorrow
      nextReminder.setHours(hours, minutes, 0, 0);
      
      await Reminder.updateOne(
        { 
          email, 
          'medications.name': medication,
          'medications.time': time 
        },
        { 
          $set: { 'medications.$.nextReminder': nextReminder } 
        }
      );
      
      console.log(`Next reminder for ${medication} scheduled for ${nextReminder}`);
    } catch (error) {
      console.error(`Failed to send reminder for ${medication}:`, error);
    }
  });
  
  return job;
};

/**
 * Schedule all reminders from the database
 * @returns {Promise<Array>} - Array of scheduled jobs
 */
const scheduleAllReminders = async () => {
  try {
    const reminders = await Reminder.find({});
    const jobs = [];
    
    reminders.forEach(reminder => {
      const { email, medications } = reminder;
      
      medications.forEach(med => {
        const job = scheduleReminder({
          email,
          phoneNumber: reminder.phoneNumber,
          medication: med.name,
          time: med.time,
          isDaily: med.isDaily,
          endDate: med.endDate
        });
        jobs.push(job);
      });
    });
    
    console.log(`Scheduled ${jobs.length} reminder jobs`);
    return jobs;
  } catch (error) {
    console.error('Error scheduling reminders:', error);
    throw error;
  }
};

module.exports = {
  scheduleReminder,
  scheduleAllReminders
};