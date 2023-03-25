const deleteNoteHandler= async (event) => {
    event.preventDefault();
    console.log("pressed delete note button");
    let noteID = event.target.classList[3];
    if (!noteID) {
       noteID = event.target.parentElement.classList[3];
    }
    let todoID = await fetch(`/get-note/${noteID}`, {
        method: 'GET',
    });
    todoID = await todoID.json().then((data) => data);
    console.log(event.target)
    console.log(event.target.classList);
    console.log(noteID);
    const response = await fetch(`/delete-note/${noteID}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log("ok");
        document.location.replace(`/${todoID}`);
    } else {
        alert('Failed to delete note item');
    }
}

const noteDeleteElementList = document.getElementsByClassName('note-delete-button');
for (i = 0; i < noteDeleteElementList.length; i++) {
    noteDeleteElementList[i].addEventListener('click', deleteNoteHandler);
}