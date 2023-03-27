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
      let currentMS = Date.now();
      console.log(currentMS);
      let todayDate = new Date();
      for (j = 0; j < 3; j++){
        let filteredList = [];
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
          todayDay = todayDay + j;
          if(todayDay >= 7) {
            todayDay = todayDay-7;
          }
          if (validDays.includes(todayDay)) {
            filteredList.push(todos[i])
          }
        } console.log(filteredList);
        
        let modifiedDate = new Date(currentMS + (24*60*60*1000*j));
        for (i = 0; i < filteredList.length; i++) {
          const event = {
            id: filteredList[i].todo_item,
            title: filteredList[i].todo_item,
            start: `${modifiedDate.getFullYear()}-${(modifiedDate.getMonth() +1).toString().padStart(2,"0")}-${modifiedDate.getDate()}`
          }
          events.push(event);
        } console.log(events);
      }
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