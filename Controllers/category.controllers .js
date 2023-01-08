
const Category = require("../Models/Category");

//affichage tout les Category
exports.afficher = async (req, res) => {
  const resultat = await Category.find();
  res.send(resultat);
};

//afficher un detailles Category
exports.details_Category = async (req, res) => {
  const resultat = await Category.findOne({ _id: req.params._id });
  res.send(resultat);
};

//ajouter Category

exports.ajouter_Category = async (req, res) => {
  const resultat = new Category(req.body);
  resultat
    .save()
    .then((success) => {
      res.send(resultat);
    })
    .catch((erreur) => {
      res.send(erreur);
    });
};

//modifier Category

exports.modifier_Category = async (req, res) => {
  Category.updateOne(
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

//supprimer Category

exports.delete_Category = async (req, res) => {
  const resultat = await Category.deleteOne({ _id: req.params._id });
  res.send(resultat);
};
