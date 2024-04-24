function updateTime() {
  let now = new Date();
  let timeElement = document.getElementById("time");
  let dateElement = document.getElementById("date");

  let hours = now.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  let year = now.getFullYear();
  let monthIndex = now.getMonth();
  let monthNames = [
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
  let monthName = monthNames[monthIndex];
  let day = String(now.getDate()).padStart(2, "0");

  let dayIndex = now.getDay();
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = dayNames[dayIndex];

  let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  let formattedDate = `${dayName}, ${day} ${monthName}, ${year}`;

  timeElement.textContent = formattedTime;
  dateElement.textContent = formattedDate;
}

updateTime();

// Update the time every second
setInterval(updateTime, 1000);
