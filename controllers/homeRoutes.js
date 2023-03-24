const router = require('express').Router();
const { User, Todos } = require('../models');
const withAuth = require('../../utils/auth');

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
    res.render('home', {
      toDoData,
      loggedIn: req.session.loggedIn
    });
  } else {
    res.render('home');
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const todoData = await Todos.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!todoData) {
      res.status(404).json({ message: 'No todo item found with this id!' });
      return;
    }

    res.status(200).json(todoData);
} catch (err) {
    res.status(500).json(err);
    }
    });
    
    module.exports = router;
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

module.exports = router;