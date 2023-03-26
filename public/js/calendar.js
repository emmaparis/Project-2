const { Todos } = require("../../models");

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  console.log(calendarEl);
  const calendar = new FullCalendar.Calendar(calendarEl, {
    eventDidMount: function (info) {
      const tooltip = document.createElement("div");
      tooltip.textContent = "TESTING";
      tooltip.setAttribute("role", "tooltip");
      document.body.appendChild(tooltip);
      console.log(info.el);
      info.el.addEventListener("click", function (e) {
        e.preventDefault();
        const before = window.getComputedStyle(e.target, ":before");
        before.innerHTML = "<h1>WOW COOL</h1>";
        console.log(before);
      });
      Popper.createPopper(info.el, tooltip, {
        placement: "left",
      });
    },
    editable: true,
    selectable: true,
    select: function () {
      alert("a day has been clicked!");
    },
    initialView: "dayGridWeek",
    events: [
      {
        id: "a",
        title: "my event",
        start: "2023-03-24",
      },
    ],
  });
console.log(toDos)
  calendar.addEvent({
    id: "a",
    title: "add event",
    start: "2023-03-25",
  });

  calendar.render();
});
