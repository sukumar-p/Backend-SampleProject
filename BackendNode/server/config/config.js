module.exports = {
    port : 3001,
    jwt : {
        secret:"hkjjkrh!23",
        options: {expiresIn: 365 * 60 * 60 * 24 }
    },
    db : {
        mongo:{
            uri:"mongodb://localhost:27017/sampleProjectNode",
            options : {
                user :'',
                pass : ''
            }
        }
       
    },
    baseUrl:'http://localhost:'+3001,
}
