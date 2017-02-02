const express = require("express");
const route = express.Router();

module.exports = function(db) {
  route.get('/', dummyData)
  route.get('/users', getUsers)

  function dummyData(req, res, next) {
      res.json({"data": "data"});
  }

  function getUsers(req, res, next) {
    db.findUsers()
    .then(function(usersInfo){
      console.log('usersAPI', usersInfo);
      res.json(usersInfo);
    })
  }

  return route;
};
