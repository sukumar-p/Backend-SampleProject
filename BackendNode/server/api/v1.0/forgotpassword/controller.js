let forgotpasswordcollection = require('../signup/model')
let mongoose = require('mongoose');



let newpassword = (req,res)=>
// console.log(req.body);
{
    forgotpasswordcollection.findOne({email:req.body.email})
    .then(
        (response)=>
        {
            console.log(response);
            if(response!=null){
                res.status(200).json({ status: true, message: "", user: response });
                

            
            
            }
              else{
                res.status(200).json({ status:false,message:"csdcsdc"})
            }
        })
        .catch(
            (error) => {

                res.status(500).json({ status: false, message: "Error while creating add , please again" })
            }
        ) 

    }

// let forgotpassword = (req,res)=>{
//     console.log(req.body)
//     forgotpasswordcollection.findOneAndUpdate({email: req.body.email},{$set: {password: req.body.newPassword}},{new:true})
//     .then(
//        (response) => {
//            if(response) {
//              res.status(200).json({status: true,messsage: "your password updated successfully",data: response})
//            }
//        }
//     )
// }

module.exports= {
    newpassword
}