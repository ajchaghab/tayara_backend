const mongoose = require("mongoose");
const Category = require("./Category");
const Utilisateur = require("./Utilisateur");

const schema = mongoose.Schema({
  nom: String,
  referance: String,
  image: {
    name: String,
    path: String,
    size: Number,
    type_image: String,
  },
  prix: Number,
  description: String,
  stock: { type: Number, default: 0 },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: Category },
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: Utilisateur },
});

module.exports = mongoose.model("Produits", schema);
