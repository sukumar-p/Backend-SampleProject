
let loginCollection = require('../signup/model');
let jwt = require("jsonwebtoken");
let config = require("../../../config/config");

let loginadd = (req, res) => {
    // console.log(req.body)
    loginCollection.findOne({ email: req.body.email, password: req.body.password })
        .then(
            (response) => {
                if (response != null) {
                    console.log(response)
                    jwt.sign({ id: response.id }, config.jwt.secret, function (err, encodedData) {
                        if (!err) {
                            res.status(200).json({ status: true, message: "successfully logged in", userData: response, userToken: encodedData })
                        } else {
                            throw (err);
                        }
                    })
                }
                else {
                    res.status(200).json({ status: false, message: "Wrong Credentials" });
                }
            }
        )
        .catch(
            (error) => {

                res.status(500).json({ status: false, message: "Error while creating add , please again" })
            }
        )
}


module.exports = {
    loginadd
}