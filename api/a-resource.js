const express = require("express");
const route = express.Router();
const bcrypt = require('bcryptjs');



module.exports = function(db) {
  
  route.get('/users', getAllUsers);
  route.get('/zones', getZoneData);
  route.post('/login', loginData);
  route.post('/register', postNewUser);


  function getAllUsers(req, res, next) {
    db.displayAllUsers()
    .then(function(allUsers){
      res.json(allUsers);
    })
  }

  function getUsers(req, res, next) {
    db.findUsers()
    .then(function(usersInfo){
      console.log('usersAPI', usersInfo);
      res.json(usersInfo);
    })
  }

  function getZoneData(req, res, next) {
    db.listZoneData()
    .then(function(dataInfo) {
      console.log('zoneAPI', dataInfo);
      res.json(dataInfo)
    })
  }

  function loginData(req, res, next) {
    console.log("here we are");
    const name = req.body.name
    console.log('api data', name);
    db.findUserByName(name)
    .then(function(user){
      res.json(user)
    })
  }

  function postNewUser(req, res, next){
    const user = {
      'name':req.body.name,
      'password':req.body.password
    }
    //encrypt password
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        //add hashed password back to user object
        user.password = hash
          db.addNewUserToTable(user)
          .then((userByID)=>{
            res.json(userByID[0])
          })
      })
    })
  }

  return route;
};
