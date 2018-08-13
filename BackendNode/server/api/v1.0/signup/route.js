let express=require('express')
let router=express.Router();

let signupController = require('./controller')

router.post('/signup',signupController.signupadd)


module.exports=router;