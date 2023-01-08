const mongoose = require("mongoose");
const Utilisateur = require("./Utilisateur");
const Produits = require("./Produits");

const schema = mongoose.Schema({
  quantite: Number,
  date_commande: { type: Date, default: Date.now() },
  etat: { type: String, default: "En Attente" },
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: Utilisateur },
  produit_id: { type: mongoose.Schema.Types.ObjectId, ref: Produits },
});

module.exports = mongoose.model("Commande", schema);
