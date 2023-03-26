const express = require('express');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const recurringTodoRoutes = require('./recurringTodoRoutes');
const settingsRoutes = require('./settingsRoutes');
const signupRoutes = require('./signupRoutes');
var exphbs = require('express-handlebars');
const todoRoutes = require('./todoRoutes');

const router = express();


router.engine('handlebars', exphbs({defaultLayout: 'main'}));
router.set('view engine', 'handlebars');

router.get('/api/test', (req, res) => {
    res.json([
        {
          id: 1,
          title: 'Test todo item',
        },
      ]);
  });

// View routes
router.use('/login', loginRoutes);
router.use('/settings', settingsRoutes)
router.use('/signup', signupRoutes)
router.use('/', homeRoutes);

// API routes
router.use(recurringTodoRoutes);
router.use('/api/todo', todoRoutes);

module.exports = router;
