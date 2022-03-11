var express = require('express');
var router = express.Router();

var ticketAeeni = require("../controller/ticket-aeeni");


router.get('/get_etudiant/im/:im/:classe',  ticketAeeni.getByMatricule);

router.get('/get_etudiant/nom/:nom/:classe',  ticketAeeni.getByNom);

router.post('/add/etudiant', ticketAeeni.addEtudiant);

router.put('/update/:idDoc', ticketAeeni.updateAccepted);

module.exports = router;