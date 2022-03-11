var express = require('express');
var router = express.Router();

var ticketAeeni = require("../controller/ticket-aeeni");


router.get('/get_etudiant/im/:im',  ticketAeeni.getByMatricule);

router.get('/get_etudiant/nom/:nom',  ticketAeeni.getByNom);

router.post('/add/etudiant', ticketAeeni.addEtudiant);

module.exports = router;