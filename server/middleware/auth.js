const jwt = require('jsonwebtoken')
const jwtConfig = require('../db/config/jwt-config')



// this will check if token is valid before running any excecution on any api
const auth  = async (req, res, next)=>{

        const token = req.header('Authorization').replace('Bearer ', '')
    
        if(token){
            jwt.verify(token, jwtConfig.secret,(error, data)=>{
                if(error){
                   return res.status(500).json({
                        status:0,
                        message:"Invalid Token"
                    })
                }else{
                  req.data = data;
                  next();
                }
            })
            

        }else{
                res.status(500).json({
                status:0,
                message:"Token Needed"
            })
        }

    



    }

module.exports= auth