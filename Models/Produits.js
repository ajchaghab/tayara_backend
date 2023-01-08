const mongoose = require("mongoose");
const Category = require("./Category");
const Utilisateur = require("./Utilisateur");

const schema = mongoose.Schema({
  nom: String,
  referance: String,
  image: String,
  prix: Number,
  description: String,
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: Category },
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: Utilisateur },
});

module.exports = mongoose.model("Produits", schema);
