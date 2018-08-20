let express=require('express')
let router=express.Router();
let passwordresetcontroller = require("./controller")


router.post('/passwordreset',passwordresetcontroller.updatepassword)

module.exports=router;