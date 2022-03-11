var express = require('express');
var router = express.Router();
const path = require('path');

var etudiant = require("./etudiant");



module.exports = app => {

  app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../views/dashboard.html'));
  });

  //all route declared here
  app.use('/api', etudiant);

};
