let express = require('express');

let router = express.Router();

let signupRouter = require('../api/v1.0/signup/route');

let loginRouter = require('../api/v1.0/login/route');
let forgotpasswordRouter = require("../api/v1.0/forgotpassword/route");
let resetpasswordRouter = require("../api/v1.0/resetpassword/route");

router.use('/SignUp',signupRouter);
router.use('/Login',loginRouter);
router.use('/forgotpassword',forgotpasswordRouter); 
router.use('/resetpassword',resetpasswordRouter);







module.exports = router;
