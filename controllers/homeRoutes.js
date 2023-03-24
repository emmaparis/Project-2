const router = require('express').Router();
const { User, Todos } = require('../models');

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

router.post('/add', async (req, res) => {
  console.log("todo add attempt")
    try {
        const dbTodoData = await Post.create({
            todo_item: req.body.todoText,
            contents: req.body.postContent,
            user_id: req.session.userID,
        });
        res.status(200).json("ok");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;