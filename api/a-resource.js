const express = require("express");
const route = express.Router();

module.exports = function(db) {
  route.get('/', dummyData)
  route.get('/users', getUsers)
  route.get('/zones', getZoneData)

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

  function getZoneData(req, res, next) {
    db.listZoneData()
    .then(function(dataInfo) {
      console.log('zoneAPI', dataInfo);
      res.json(dataInfo)
    })
  }

  return route;
};
