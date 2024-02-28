export function fillTimeArray() {
  let times = [];
  let currentTime = new Date();
  currentTime.setHours(0, 0, 0, 0); // Set start time to 12:00 AM

  const endTime = new Date();
  endTime.setHours(23, 45, 0, 0); // Set end time to 11:45 PM

  while (currentTime <= endTime) {
    // Loop until reaching end time
    let formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    times.push(formattedTime); // Push current time to array
    currentTime.setMinutes(currentTime.getMinutes() + 15); // Increment time by 15 minutes

    // Check if advancing to the next day
    if (currentTime.getDate() !== endTime.getDate()) {
      break; // Break loop if advancing to the next day
    }
  }

  return times;
}

// Example usage:
let timeArray = fillTimeArray();
