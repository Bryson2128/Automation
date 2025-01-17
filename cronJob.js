const cron = require('node-cron');

// Define the task to run at 6:00 AM and 6:00 PM
const task = cron.schedule('0 6,18 * * *', () => {
  const now = new Date().toLocaleString();
  console.log(`[${now}] Running scheduled task...`);

  // Add the task logic here
  performTask();
});

// Function to execute your desired task
function performTask() {
  console.log("Task executed: This is where your business logic goes.");
}

// Start the cron job
task.start();

console.log("Cron job scheduled to run at 6:00 AM and 6:00 PM.");

/**
 * Note: To keep the script running continuously, ensure this file
 * is executed with `node` and stays active as a background process.
 */
