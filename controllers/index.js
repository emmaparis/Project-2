const express = require('express');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const settingsRoutes = require('./settingsRoutes');
const signupRoutes = require('./signupRoutes');
var exphbs = require('express-handlebars');

const router = express();
router.engine('handlebars', exphbs({defaultLayout: 'main'}));
router.set('view engine', 'handlebars');


router.use('/login', loginRoutes);
router.use('/settings', settingsRoutes)
router.use('/signup', signupRoutes)
router.use('/', homeRoutes);

module.exports = router;
