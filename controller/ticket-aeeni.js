var db = require("../config/config");
var moment = require('moment'); // require


exports.getByMatricule = async (req, res) => {
    let im = req.params.im;
    try {
        let data = [];
        await db.collection("etudiant")
            .where('im', '==', im)
            .get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    });
                })
            });
        res.status(200).send({
            error: false,
            data: data
        });
    } catch (e) {
        res.status(500).send({
            error: true,
            data: "Internal server error" + e.message
        });
    }
}

exports.getByNom = async (req, res) => {
    let nom = req.params.nom;
    try {
        let data = [];
        await db.collection("etudiant")
            .where('nom', 'in', nom)
            .get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    });
                })
            });
        res.status(200).send({
            error: false,
            data: data
        });
    } catch (e) {
        res.status(500).send({
            error: true,
            data: "Internal server error" + e.message
        });
    }
}

exports.addEtudiant = async (req, res) => {
    await db.collection('etudiant').add(req.body).then((result) => {
        res.status(200).send({
            error: false,
            data: result
        });
    }).catch((err) => {
        res.status(500).send({
            error: true,
            data: "Internal server error" + err.message
        });
    });
}