const router = require('express').Router();
// const { User, Settings } = require('../models');

router.get('/settings', async (req, res) => {
  if (req.session.loggedIn) {
    res.render('settings', {
        // settings data whatever that will be
      loggedIn: req.session.loggedIn
    });
  } else {
    res.render('login');
  }
});

module.exports = router;