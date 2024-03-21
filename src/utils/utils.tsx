import dayjs from "dayjs";

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

export function generateMonth(month = dayjs().month(), year = dayjs().year()) {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  let dateArray = [];

  //.date() returns day of month - 1-31

  //Create last days of previous month (in the first week)
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    dateArray.push({ currentMonth: false, date: firstDateOfMonth.day(i), today: false });
  }

  // Populate current month days
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    dateArray.push({
      currentMonth: true,
      date: firstDateOfMonth.date(i),
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  // Create first days of next month (in the last week)
  const remainingDaysOfWeek = 7 - lastDateOfMonth.day(); //num of days left in week after last day of month

  for (
    let i = lastDateOfMonth.date() + 1;
    i < lastDateOfMonth.date() + remainingDaysOfWeek;
    i++
  ) {
    // console.log(lastDateOfMonth);
    dateArray.push({ currentMonth: false, date: lastDateOfMonth.date(i), today: false });
  }

  return dateArray;
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// DATE MATCH
export function isDate(date: string) {
  const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-(\d{4})$/;
  return dateRegex.test(date);
}
