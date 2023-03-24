const deleteTodoHandler= async (event) => {
    event.preventDefault();
    console.log("pressed delete todo button");
    const todoID = event.target.classList[3];
    console.log(todoID);
    const response = await fetch(`/delete/${todoID}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log("ok");
        document.location.replace(`/`);
    } else {
        alert('Failed to delete todo item');
    }
}
  document.querySelector('#delete-button').addEventListener('click', deleteTodoHandler);