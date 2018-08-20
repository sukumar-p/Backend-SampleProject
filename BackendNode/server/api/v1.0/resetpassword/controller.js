let updatepasswordcollection = require("../signup/model");
let mongoose = require('mongoose');


let updatepassword = (req, res) => {
    console.log(req.body);
    updatepasswordcollection.findOneAndUpdate({ _id: req.body.id },{ $set: { password: req.body.passwordData.password,conpassword:req.body.passwordData.confirmpassword}},{new:true})
        .then(
            (response) => {
                console.log(response)
            }
        )

}
module.exports = {
  updatepassword
}
