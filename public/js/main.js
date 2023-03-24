let dateTimeEl = document.querySelector("#date-time");
document.querySelector(“#date-time”).textContent = “Today, ” + dayjs().format(‘dddd, MMMM D, YYYY’)