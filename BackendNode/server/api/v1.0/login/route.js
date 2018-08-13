let express=require('express')
let router=express.Router();

let loginController = require('./controller')

router.post('/login',loginController.loginadd)


module.exports=router;