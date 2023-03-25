const createNoteHandler = async (event) => {
    event.preventDefault();
    console.log("pressed submit note button");
    const noteText = document.querySelector('#new-note-input').value.trim();
    let todoAddID = Number(event.target.classList[3]);
    if (!todoAddID) {
        todoAddID = Number(event.target.parentElement.classList[3]);
    }
    console.log(todoAddID);
    console.log(noteText);
    if (noteText) {
      const response = await fetch(`/${todoAddID}/add-note`, {
        method: 'POST',
        body: JSON.stringify({ noteText }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("ok");
        document.location.replace(`/${todoAddID}`);
      } else {
        alert('Failed to add note item');
      }
    }
  };
  
  document.querySelector('#submit-note-button').addEventListener('click', createNoteHandler);