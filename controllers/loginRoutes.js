const router = require('express').Router();
const { User } = require('../models');

router.get('/', (req, res) => {
    console.log("showing login page");
    console.log(req.session);
    return res.render('login', {
      loggedIn: req.session.loggedIn
    });
});

router.post('/login', async (req, res) => {
    console.log("log in attempt")
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
    
        if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.userID = userData.id;
          req.session.loggedIn = true;
          console.log(req.session);
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(400).json(err);
      }
});

router.post('/logout', async (req, res) => {
  console.log("log out attempt")
  if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
});

module.exports = router;