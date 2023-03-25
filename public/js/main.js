const dateTimeEl = document.querySelector('#date-time')
dateTimeEl.textContent = `Today,  ${dayjs().format("dddd, MMMM D, YYYY")}`;

