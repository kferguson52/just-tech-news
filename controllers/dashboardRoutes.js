const router = require('express').Router();
const withAuth = require('../utils/auth');


// get all posts for homepage
router.get('/', withAuth, (req, res) => {
 res.render('behindAuth', { layout: 'dashboard'})
});



module.exports = router;

