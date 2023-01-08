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
  var tab = [];
  if (req.files && req.files.null) {
    req.files.null.map((f) => {
      tab.push(f.path);
    });
  }

  if (req.files && req.files.pic) {
    resultat.image = req.files.pic;
    resultat.image.type_image = req.files.pic.type;
  }

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

//filter par gategorie

exports.filterByCategory = async (req, res) => {
  const resultat = await Produits.find({
    categorie_id: req.params.categorie_id,
  });
  res.send(resultat);
};

/* 
filter par multicri soit le body contient un object :
{
  couleur : 'noir' , taille :'xl', type :'test',....
}

*/

exports.filterAll = async (req, res) => {
  const resultat = await Produits.find(req.body);
  res.send(resultat);
};
