const router = require('express').Router();
const { User, Todos } = require('../models');

router.get('/', async (req, res) => {
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
});

module.exports = router;