const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;