let express = require('express');

let router = express.Router();

let signupRouter = require('../api/v1.0/signup/route');

let loginRouter = require('../api/v1.0/login/route');

router.use('/SignUp',signupRouter);
router.use('/Login',loginRouter);








module.exports = router;