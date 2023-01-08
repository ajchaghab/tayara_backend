const Commande = require("../Models/Commande");
const Produits = require("../Models/Produits");

//affichage tout les Commande
exports.afficher = async (req, res) => {
  const resultat = await Commande.find()
    .populate("produit_id")
    .populate("utilsateur_id");
  res.send(resultat);
};

//afficher un detailles Commande
exports.details_commande = async (req, res) => {
  const resultat = await Commande.findOne({ _id: req.params._id })
    .populate("produit_id")
    .populate("utilsateur_id");
  res.send(resultat);
};

//ajouter Commande

exports.ajouter_Commande = async (req, res) => {
  const resultat = new Commande(req.body);

  resultat
    .save()
    .then((success) => {
      res.send(resultat);
    })
    .catch((erreur) => {
      res.send(erreur);
    });
};

//modifier Commande

exports.modifier_Commande = async (req, res) => {
  Produits.updateOne({ _id: req.params._id }, req.body, (erreur, success) => {
    if (erreur) {
      res.send(erreur);
    } else {
      res.send(success);
    }
  });
};

//supprimer Commande

exports.delete_Commande = async (req, res) => {
  const resultat = await Produits.deleteOne({ _id: req.params._id });
  res.send(resultat);
};

//Verifié quantité stock
exports.modier_etat = async (req, res) => {
  if (req.params.etat == "Confirmer") {
    var cmd = await Commande.findOne({ _id: req.params._id });
    var prod = await Produits.findOne({ _id: cmd.produit_id });
    if (prod.stock >= cmd.quantite) {
      prod.stock = prod.stock - cmd.quantite;
      cmd.etat = "Confirmer";
      await prod.save();
      await cmd.save();
      res.send({ succes: "Commande bien confirmé" });
    } else {
      res.send({ erreur: "out of stock" });
    }
  } else {
    await Commande.updateOne(
      { _id: req.params._id },
      { etat: req.params.etat }
    );
    res.send({ updated: "Success" });
  }
};
