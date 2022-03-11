var express = require('express');
var router = express.Router();
const path = require('path');

var etudiant = require("./etudiant");

const readXlsxFile = require('read-excel-file/node')

var db = require("../config/config");

var batch = db.batch();

module.exports = app => {

  app.get('/RFSCZnqhtYjQYQRCSuguVFdTJAv5jsZEwIRSjXTNbE', function(req,res){
    res.sendFile(path.join(__dirname, '../views/dashboard.html'));
  });

   app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname, '../views/login.html'));
  });

  app.get('/importExcell',  function(req,res){
    let classe = "M1IG";
    // File path.
    // readXlsxFile('./public/M1IG.xlsx').then(async (rows) => {
    //   for (var i = 1; i < rows.length; i++) {
    //     var docref = db.collection("etudiant").doc();
    //     batch.set(docref, {im: rows[i][0]+"", firstname: rows[i][1], classe: classe,  accepted: 0});
    //   }
    //   batch.commit();
    //   res.send({rows: rows, nombre: rows.length});
    // })
    // res.sendFile(path.join(__dirname, '../views/dashboard.html'));
  });

  //all route declared here
  app.use('/api', etudiant);

};
