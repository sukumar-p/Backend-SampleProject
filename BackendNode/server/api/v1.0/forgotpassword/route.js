let express=require('express')
let router=express.Router();
let passwordresetcontroller = require("./controller")

router.post('/passwordreset',passwordresetcontroller.newpassword)

module.exports=router;