// const { default: events } = require("inquirer/lib/utils/events");

const calendarEl = document.getElementById("calendar");

document.addEventListener('DOMContentLoaded', async function() {
  var calendarEl = document.getElementById('calendar');
  let events = [];
  try {
    const response = await fetch('/recurring', 
    {
      method: 'GET',
    });
  
    if (response.ok) {
      const todos = await response.json();
      console.log('Fetched data:', todos); // Add this line to log the fetched data
      let filteredList = [];
      let todayDate = new Date();
      for (i = 0; i < todos.length; i++) {
        let validDays = [];
        if (todos[i].sunday) {
          validDays.push(0);
        }
        if (todos[i].monday) {
          validDays.push(1);
        }
        if (todos[i].tuesday) {
          validDays.push(2);
        }
        if (todos[i].wednesday) {
          validDays.push(3);
        }
        if (todos[i].thursday) {
          validDays.push(4);
        }
        if (todos[i].friday) {
          validDays.push(5);
        }
        if (todos[i].saturday) {
          validDays.push(6);
        }
        let todayDay = todayDate.getDay();
        if (validDays.includes(todayDay)) {
          filteredList.push(todos[i])
        }
      } console.log(filteredList);
      for (i = 0; i < filteredList.length; i++) {
        const event = {
          id: filteredList[i].todo_item,
          title: filteredList[i].todo_item,
          start: `${todayDate.getFullYear()}-${(todayDate.getMonth() +1).toString().padStart(2,"0")}-${todayDate.getDate()}`
        }
        events.push(event);
      } console.log(events);
    } else {
      alert('Failed to fetch recurring todos.');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'EST',
    initialView: 'threeDays',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'threeDays, dayGridDay'
    },
    views: {
      threeDays: {
        type: 'dayGrid',
        duration: { days: 3 }
      }
    },
    editable: true,
    events: events
  });

  calendar.render();
});




// const { Todos } = require("../../models");

// document.addEventListener("DOMContentLoaded", function () {
  // const calendarEl = document.getElementById("calendar");
  // console.log(calendarEl);
  // const calendar = new FullCalendar.Calendar(calendarEl, {
  //   eventDidMount: function (info) {
  //     const tooltip = document.createElement("div");
  //     tooltip.textContent = "TESTING";
  //     tooltip.setAttribute("role", "tooltip");
  //     document.body.appendChild(tooltip);
  //     console.log(info.el);
  //     info.el.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       const before = window.getComputedStyle(e.target, ":before");
  //       before.innerHTML = "<h1>WOW COOL</h1>";
  //       console.log(before);
  //     });
  //     Popper.createPopper(info.el, tooltip, {
  //       placement: "left",
  //     });
    // },
    
//     editable: true,
//     selectable: true,
//     select: function () {
//       alert("a day has been clicked!");
//     },
//     initialView: "dayGridWeek",
//     events: [
//       {
//         id: "a",
//         title: "my event",
//         start: "2023-03-24",
//       },
//     ],
//   });
// console.log(toDos)
//   calendar.addEvent({
//     id: "a",
//     title: "add event",
//     start: "2023-03-25",
//   });

//   calendar.render();
// });
