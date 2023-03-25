const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('signup')
    });

module.exports = router;