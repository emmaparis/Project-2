// Save the todo item and selected days
async function saveEdits(event) {
    const sunday = document.querySelector('#sunday-checkbox').checked;
    const monday = document.querySelector('#monday-checkbox').checked;
    const tuesday = document.querySelector('#tuesday-checkbox').checked;
    const wednesday = document.querySelector('#wednesday-checkbox').checked;
    const thursday = document.querySelector('#thursday-checkbox').checked;
    const friday = document.querySelector('#friday-checkbox').checked;
    const saturday = document.querySelector('#saturday-checkbox').checked;
  
    if ((sunday || monday || tuesday || wednesday || thursday || friday || saturday)) {
      const isRecurring = true;
      console.log(event.target);
      const response = await fetch(`/recurring/${event.target.getAttribute("data-id")}`, {
        method: 'PUT',
        body: JSON.stringify({
          sunday,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          isRecurring,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to save todo item.');
      }
    }
  }
 
  document
    .getElementById('save-todo')
    .addEventListener('click', saveEdits);

