let forgotpasswordcollection = require('../signup/model')
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


                    console.log("hai",response);

                    var html = "hello world! your email verification link is <a href='http://localhost:3000/v1/create/verify/" + response.hashPassword + "'>click here to verify</a>";
                     console.log("resp",html)
                    //  const nodemailer = require('nodemailer');
                    // const transport = nodemailer.createTransport({
                    //     service: 'Gmail',
                    //     auth: {
                    //         user: 'p.sukumara7@gmail.com',
                    //         pass: 'idieforindia1',
                    //     }
                    // });
                    // const mailOptions = {
                    //     from: "p.sukumara7@gmail.com",
                    //     to: "vipinreddy8@gmail.com",
                    //     subject: 'hello world!',
                    //     html: html,
                    // };
                    // transport.sendMail(mailOptions, (error, info) => {
                    //     if (error) {
                    //         console.log(error);
                    //     }
                    //     else {
                    //         console.log(`Message sent: ${info.response}`);
                    //         res.status(200).json({ status: true, message: "user successfully created and password send to your email to login please verify your email" });
                    //     }

                    // });



                    // const nodemailer= require("nodemailer");
                    // nodemailer.createTestAccount((err, account) => {
                    //     // create reusable transporter object using the default SMTP transport
                       
                    //     let transporter = nodemailer.createTransport({
                    //         host: 'smtp.gmail.com',
                    //         port: 587,
                    //         secure: false, // true for 465, false for other ports
                    //         auth: {
                    //             user: account.user, // generated ethereal user
                    //             pass: account.pass // generated ethereal password
                    //         }
                    //     });
                    
                    //     // setup email data with unicode symbols
                    //     let mailOptions = {
                    //         from: 'p.sukumara7@gmail.com', // sender address
                    //         to: 'vipinreddy8@gmail.com', // list of receivers
                    //         subject: 'Hello ✔', // Subject line
                    //         text: 'Hello world?', // plain text body
                    //         html: html // html body
                    //     };
                    
                    //     // send mail with defined transport object
                    //     transporter.sendMail(mailOptions, (error, info) => {
                    //         if (error) {
                    //             return console.log(error);
                    //         }
                    //         console.log('Message sent: %s', info.messageId);
                    //         // Preview only available when sending through an Ethereal account
                    //         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    
                    //         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                    //         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                    //     });
                    // });












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

module.exports = {
    newpassword
}