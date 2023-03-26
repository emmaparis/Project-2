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

// API routes
router.use('/recurring', recurringTodoRoutes);
// router.use('/api/todos', todoRoutes);

// View routes
router.use('/login', loginRoutes);
router.use('/settings', settingsRoutes)
router.use('/signup', signupRoutes)
router.use('/', homeRoutes);

module.exports = router;
