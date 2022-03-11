var db = require("../config/config");
var moment = require('moment'); // require


exports.getByMatricule = async (req, res) => {
    let im = req.params.im;
    let classe = req.params.classe;
    console.log(typeof(im));
    try {
        let data = [];
        await db.collection("etudiant")
            .where('im', '==', im).where('classe', '==' ,classe)
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
    let classe = req.params.classe;
    try {
        let data = [];
        await db.collection("etudiant")
           .where('firstname', '>=', nom).where('classe', '==' ,classe)
            .get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.data().firstname, doc.data().classe);
                    console.log(doc.data().firstname.search(nom));
                    if(doc.data().firstname.search(nom)  == 0){
                         data.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    }
                    
                   
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

exports.updateAccepted = async (req, res) => {
    let idDoc = req.params.idDoc;
   db.collection("etudiant").doc(idDoc).update({accepted: 1}).then((result) => {
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