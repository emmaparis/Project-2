var viewTodoHandler= async (event) => {
    event.preventDefault();
    console.log("pressed todo detail button");
    let todoID = event.target.classList[4];
    if (!todoID) {
       todoID = event.target.parentElement.classList[4];
    }
    console.log(event.target);
    console.log(event.target.classList);
    console.log(todoID);
    document.location.replace(`/${todoID}`);
}

var viewElementList = document.getElementsByClassName('todo-detail-button');
for (i = 0; i < viewElementList.length; i++) {
    viewElementList[i].addEventListener('click', viewTodoHandler);
}