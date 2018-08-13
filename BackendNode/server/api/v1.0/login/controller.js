let loginCollection = require('../signup/model');

let loginadd = (req,res)=>{
    console.log(req.body)
    loginCollection.findOne({email:req.body.email,password:req.body.password})
    .then(
        (response)=>{
            
            if(response!=null){
                res.status(200).json({ status : true , message :"Success"  , addDetails:response});

            }
            else{
                res.status(200).json({ status : false , message :"Wrong Credentials"}); 
               
            }
        }
    )
    .catch(
        (error)=>{

            res.status(500).json({ status : false , message :"Error while creating add , please again"   })
        }
    )
}


module.exports = {
    loginadd
}