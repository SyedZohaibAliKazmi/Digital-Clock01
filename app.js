function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  let hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const year = now.getFullYear();
  const monthIndex = now.getMonth();
  const monthNames = [
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
  const monthName = monthNames[monthIndex];
  const day = String(now.getDate()).padStart(2, "0");

  const dayIndex = now.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames[dayIndex];

  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  const formattedDate = `${dayName}, ${day} ${monthName}, ${year}`;

  timeElement.textContent = formattedTime;
  dateElement.textContent = formattedDate;
}

updateTime(); 

// Update the time every second
setInterval(updateTime, 1000);
