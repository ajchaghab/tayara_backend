const Produits = require("../Models/Produits");

//affichage tout les Produits
exports.afficher = async (req, res) => {
  const resultat = await Produits.find()
    .populate("category_id")
    .populate("utilsateur_id");
  res.send(resultat);
};

//afficher un detailles Produits
exports.details_Produits = async (req, res) => {
  const resultat = await Produits.findOne({ _id: req.params._id })
    .populate("category_id")
    .populate("utilsateur_id");
  res.send(resultat);
};

//ajouter Produits

exports.ajouter_Produits = async (req, res) => {
  const resultat = new Produits(req.body);
  resultat
    .save()
    .then((success) => {
      res.send(resultat);
    })
    .catch((erreur) => {
      res.send(erreur);
    });
};

//modifier Produits

exports.modifier_Produits = async (req, res) => {
  Produits.updateOne({ _id: req.params._id }, req.body, (erreur, success) => {
    if (erreur) {
      res.send(erreur);
    } else {
      res.send(success);
    }
  });
};

//supprimer Produits

exports.delete_Produits = async (req, res) => {
  const resultat = await Produits.deleteOne({ _id: req.params._id });
  res.send(resultat);
};
