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
    for (i = 0; i < rawToDoData.length; i++) {
      toDoData.push(rawToDoData[i].get({ plain: true }));
    }
    console.log(toDoData);
    let hastoDos = false;
    if (toDoData.length > 0){
      hastoDos = true;
    }
    let noteData = [];
    let hasNotes = false;
    if (hastoDos) {
      const rawNoteData = await Note.findAll({
        where: {
          todo_id: 1,
        },
      });
      for (i = 0; i < rawNoteData.length; i++) {
        noteData.push(rawNoteData[i].get({ plain: true }));
      }
      if (noteData.length > 0){
        hasNotes = true;
      }
    }
    res.render('home', {
      toDoData,
      noteData,
      loggedIn: req.session.loggedIn,
      hastoDos: hastoDos,
      hasNotes: hasNotes,
      currentNote: 1
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
    for (i = 0; i < rawToDoData.length; i++) {
      toDoData.push(rawToDoData[i].get({ plain: true }));
    }
    console.log(toDoData);
    let hastoDos = false;
    if (toDoData.length > 0){
      hastoDos = true;
    }
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
    res.render('home', {
      toDoData,
      noteData,
      loggedIn: req.session.loggedIn,
      hastoDos: hastoDos,
      hasNotes: hasNotes,
      currentNote: req.params.id
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

module.exports = router;