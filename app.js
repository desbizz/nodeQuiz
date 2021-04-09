const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,  'public');
const viewsPath = path.join(__dirname, 'views')
const port = process.env.PORT || 8090
const sequelize = require('./server/db/connect')
const { QueryTypes, } = require('sequelize');
const bodyParser = require('body-parser');
var initModels = require("./server/db/models/init-models");
const JWT = require ('jsonwebtoken');
var jwtConfig = require("./server/db/config/jwt-config");
var bcrypt = require('bcrypt');


var models = initModels(sequelize);
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};





  
  app.set('views', viewsPath)
  app.set('view engine', 'ejs');
  app.use(express.static(publicPath));
  app.use(express.static(path.join(__dirname,  'public')))
  app.use(express.json())
 
  app.use(bodyParser.json());

  //api to fetch Users
  app.get('/user', async(req,res)=>{
    
      const { page, size } = {'page':0,'size':5};
    
      const { limit, offset } = getPagination(page, size);
      
    await  models.ilance_users.findAll({include: models.ilance_projects, limit, offset}).then((data)=>{
      const totalPages = Math.ceil(data.length / limit);
      return res.status(200).json({
        status:1,
        message: 'Success',
        data: data,
        page: page,
        totalPages: totalPages
    })
    });
    
    

  })
  //api to Login
  app.post('/user' ,async(req,res)=>{
    models.ilance_users.findOne({where:{
      username:req.body.username
    }})
    .then((user)=>{
      if(user){
          bcrypt.compare(req.body.password, user.salt) 
      .then(function(result) {
        let token =JWT.sign({
          id: user.id
      }, jwtConfig.secret,{
          expiresIn: jwtConfig.expiresIn,
          notBefore: jwtConfig.notBefore
      } )
      res.status(200).json({
        status:1,
        message:"Login Success",
        token: token
    })
    }).catch((err)=>{
      console.log(err)
    })
      } else {
        res.status(200).json({
          status:0,
          message:"Invalid User"   
      })
      }
    }).catch((err)=>{
      console.log(err)
    })
  })
   //Views routes
// hbs view
  app.get('/', (req,res)=>{
  
    res.render('pages/index');
   
  }) 


  app.get('/', (req,res)=>{
  
    res.render('pages/index');
   
  })
  app.get('/list', async(req,res)=>{
  
    const { page, size } = {'page':0,'size':8};
    
  const { limit, offset } = getPagination(page, size);
  await models.ilance_users.count({
   
}).then(pages=>{
  models.ilance_users.findAll({include: models.ilance_projects, limit, offset}).then((data)=>{
      res.render('pages/list-user', { data: data,
      page: page,
      pages: pages});
   
  })
})

  
  
  
  });
 

  
  app.listen(port, () => {
    console.log('Server is up!' + port);
  });


  
  
  module.exports = app 