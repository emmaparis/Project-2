const router = require('express').Router();
const { User, Todos, Note } = require('../models');
//const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  if (req.session.loggedIn) {
    console.log(req.session);
    const rawToDoData = await Todos.findAll({
      where: {
        user_id: req.session.userID,
      },
    });
    let toDoData = [];
    const todayDay = new Date().getDay();
    for (i = 0; i < rawToDoData.length; i++) {
      const todoSelected = rawToDoData[i];
      if (todoSelected.getDays().length === 0 || rawToDoData[i].getDays().includes(todayDay)) {
        toDoData.push(rawToDoData[i].get({ plain: true }));
      }
    }
    console.log(toDoData);
    let hastoDos = false;
    let defaultID;
    if (toDoData.length > 0){
      hastoDos = true;
      defaultID = toDoData[0].id;
    }
    else {
      defaultID = 0;
    }
    const currentToDo = await Todos.findByPk(defaultID) || 0;
    let noteData = [];
    let hasNotes = false;
    if (hastoDos) {
      const rawNoteData = await Note.findAll({
        where: {
          todo_id: defaultID,
        },
      });
      for (i = 0; i < rawNoteData.length; i++) {
        noteData.push(rawNoteData[i].get({ plain: true }));
      }
      if (noteData.length > 0){
        hasNotes = true;
      }
    }

    const chartCHL = toDoData.map(item => item.todo_item).join('|'); // joins each to-do item on a | from the "toDoData" array of objects
    console.log('chartCHL', chartCHL)
    const chartCHD = []; // creates a variable for chartCHD, an empty array to eventually be filled
    for (let i = 0; i < toDoData.length; i++) { // for loop runs through each object and fills in the % found below using .push
      chartCHD.push(100/toDoData.length); // the # of to do items (or objects in the toDoData array) divided into 100 will give the % of the pie chart that to-do takes up. 
    }

    res.render('home', {
      chartCHL,
      chartCHD: chartCHD.join(','),
      toDoData,
      noteData,
      loggedIn: req.session.loggedIn,
      hastoDos: hastoDos,
      hasNotes: hasNotes,
      currentNote: defaultID,
      sunday: currentToDo.sunday,
      monday: currentToDo.monday,
      tuesday: currentToDo.tuesday,
      wednesday: currentToDo.wednesday,
      thursday: currentToDo.thursday,
      friday: currentToDo.friday,
      saturday: currentToDo.saturday,
    });
  } else {
    res.render('home');
  }
});

router.get('/:id', async (req, res) => {
  if (req.session.loggedIn) {
    console.log(req.session);
    const rawToDoData = await Todos.findAll({
      where: {
        user_id: req.session.userID,
      },
    });
    let toDoData = [];
    const todayDay = new Date().getDay();
    for (i = 0; i < rawToDoData.length; i++) {
      const todoSelected = rawToDoData[i];
      if (todoSelected.getDays().length === 0 || rawToDoData[i].getDays().includes(todayDay)) {
        toDoData.push(rawToDoData[i].get({ plain: true }));
      }
    }
    console.log(toDoData);
    let hastoDos = false;
    if (toDoData.length > 0){
      hastoDos = true;
    }
    const currentToDo = await Todos.findByPk(Number(req.params.id)) || 0;
    console.log(currentToDo.sunday);
    let noteData = [];
    let hasNotes = false;
    if (hastoDos) {
      const rawNoteData = await Note.findAll({
        where: {
          todo_id: req.params.id,
        },
      });
      for (i = 0; i < rawNoteData.length; i++) {
        noteData.push(rawNoteData[i].get({ plain: true }));
      }
      if (noteData.length > 0){
        hasNotes = true;
      }
    }

    const chartCHL = toDoData.map(item => item.todo_item).join('|');
    console.log('chartCHL', chartCHL)
    const chartCHD = [];
    for (let i = 0; i < toDoData.length; i++) {
      chartCHD.push(100/toDoData.length);
    }

    res.render('home', {
      chartCHL,
      chartCHD: chartCHD.join(','),
      toDoData,
      noteData,
      loggedIn: req.session.loggedIn,
      hastoDos: hastoDos,
      hasNotes: hasNotes,
      currentNote: Number(req.params.id),
      sunday: currentToDo.sunday,
      monday: currentToDo.monday,
      tuesday: currentToDo.tuesday,
      wednesday: currentToDo.wednesday,
      thursday: currentToDo.thursday,
      friday: currentToDo.friday,
      saturday: currentToDo.saturday,
    });
  } else {
    res.render('home');
  }
});

router.delete('/delete/:id', async (req, res) => {
  console.log("delete");
  try {
    const noteData = await Note.destroy({
      where: {
        todo_id: Number(req.params.id),
      },
    });
    const todoData = await Todos.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
    console.log(todoData);
    if (!todoData) {
      res.status(404).json({ message: 'No todo item found with this id!' });
      return;
    }

    res.status(200).json(todoData);
  } catch (err) {
    res.status(500).json(err);
    }
});

router.delete('/delete-note/:id', async (req, res) => {
  console.log("delete note");
  try {
    const noteData = await Note.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
    console.log(noteData);
    if (!noteData) {
      res.status(404).json({ message: 'No note item found with this id!' });
      return;
    }

    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
    }
});
    
   
router.post('/add', async (req, res) => {
  console.log("todo add attempt")
    try {
        const dbTodoData = await Todos.create({
            todo_item: req.body.todoText,
            is_checked: false,
            user_id: req.session.userID,
        });
        res.status(200).json("ok");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/update/:id', async (req, res) => {
  console.log("todo update attempt")
    try {
        const dbTodoData = await Todos.update({
            sunday: req.body.sunday,
            monday: req.body.monday,
            tuesday: req.body.tuesday,
            wednesday: req.body.wednesday,
            thursday: req.body.thursday,
            friday: req.body.friday,
            saturday: req.body.saturday
        },
        {
        where: {
          id: req.params.id
        }
      });
        res.status(200).json("ok");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/get-note/:id', async (req, res) => {
    console.log("lookup note");
    const todoItem = await Note.findByPk(req.params.id).then((data) => {
        return data;
    });
    res.json(todoItem.dataValues.todo_id);
});

router.post('/:id/add-note', async (req, res) => {
  console.log("note add attempt")
    try {
        const dbNoteData = await Note.create({
            note_item: req.body.noteText,
            is_checked: false,
            todo_id: Number(req.params.id),
        });
        res.status(200).json("ok");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/adduser', async (req, res) => {
  console.log("user add attempt")
    try {
        const dbUserData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json("ok");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;