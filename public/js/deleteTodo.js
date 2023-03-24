const deleteTodoHandler= async (event) => {
    event.preventDefault();
    console.log("pressed delete todo button");
    let todoID = event.target.classList[3];
    if (!todoID) {
       todoID = event.target.parentElement.classList[3];
    }
    console.log(event.target);
    console.log(event.target.classList);
    console.log(todoID);
    const response = await fetch(`/delete/${todoID}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log("ok");
        document.location.replace(`/1`);
    } else {
        alert('Failed to delete todo item');
    }
}
const elementList = document.getElementsByClassName('delete-button');
console.log(elementList);
for (i = 0; i < elementList.length; i++) {
    elementList[i].addEventListener('click', deleteTodoHandler);
}