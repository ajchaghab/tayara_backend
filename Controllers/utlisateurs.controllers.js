const Utilisateur = require("../Models/Utilisateur");
const bcrypt = require("bcryptjs");

//affichage tout les Utilisateur
exports.afficher = async (req, res) => {
  const resultat = await Utilisateur.find();
  res.send(resultat);
};

//afficher un detailles Utilisateur
exports.details_Utilisateur = async (req, res) => {
  const resultat = await Utilisateur.findOne({ _id: req.params._id });
  res.send(resultat);
};

//ajouter Utilisateur

exports.ajouter_Utilisateur = async (req, res) => {
  
  
  const resultat = new Utilisateur(req.body);
  resultat
    .save()
    .then((success) => {
      res.send(resultat);
    })
    .catch((erreur) => {
      res.send(erreur);
    });
};

//modifier Utilisateur

exports.modifier_Utilisateur = async (req, res) => {
  Utilisateur.updateOne(
    { _id: req.params._id },
    req.body,
    (erreur, success) => {
      if (erreur) {
        res.send(erreur);
      } else {
        res.send(success);
      }
    }
  );
};

//supprimer Utilisateur

exports.delete_Utilisateur = async (req, res) => {
  const resultat = await Utilisateur.deleteOne({ _id: req.params._id });
  res.send(resultat);
};

//inscription Utilisateur

exports.inscription_Utilisateur = async (req, res) => {
  var user = new Utilisateur(req.body);
  var existe_user = await Utilisateur.findOne({ email: user.email });
  if (existe_user) {
    res.send({ erreur: "adresse email existe Déja" });
  } else {
    const key = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, key);
    user.password = hash;

    await user.save();
    res.send(user);
  }
};

// connection

exports.connection = async (req, res) => {
  var user = req.body;
  var existe_user = await Utilisateur.findOne({ email: user.email });
  if (!existe_user) {
    res.send({ erreur: "email not deffined" });
  } else {
    var conforme = await bcrypt.compare(user.password, existe_user.password);
    if (!conforme) {
      res.send({ erreur: "mot pass eronné" });
    } else {
      //ajouter historique
      /*  const historique = new historique({
        msg: "ustil connecté",
        date: new Date(),
        utli: user._id,
      });
      historique.save(); */
      res.send(existe_user);
    }
  }
};
