let forgotpasswordcollection = require('../signup/model');
let updatepasswordcollection = require("../signup/model");
let mongoose = require('mongoose');






let newpassword = (req, res) =>
// console.log(req.body);
{
    forgotpasswordcollection.findOne({ email: req.body.email })
        .then(
            (response) => {
                // console.log(response);
                if (response != null) {
                    // res.status(400).json({status: false,message: "user already exists"})


                    console.log("hai", response);

                    var html = "hello world! your email verification link is <a href='http://localhost:4200/resetpassword/" + response.id + "'>click here to verify</a>";




                    const sgMail = require('@sendgrid/mail');
                    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                    const msg = {
                        to: response.email,
                        from: 'p.sukumara7@gmail.com',
                        subject: 'Sending with SendGrid is Fun',
                        text: 'and easy to do anywhere, even with Node.js',
                        html: html
                    };
                    sgMail.send(msg);

                } else {
                    res.status(500).json({ status: false, message: "user does not exist" })
                }
            }
        ).catch(
            (error) => {
                //  console.log('errorrr',error)
                res.status(500).json({ status: false, message: "error while finding the user" })
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



let updatepassword = (req, res) => {
    console.log(req.body);
    updatepasswordcollection.findOneAndUpdate({ id: req.body.id }, { $set: { password: req.body.password } })
        .then(
            (response) => {
                console.log(response)
            }
        )

}

module.exports = {
    newpassword, updatepassword
}