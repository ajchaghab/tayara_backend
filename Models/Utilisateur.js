const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const schema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  nom: String,
  prenom: String,
  image: String,
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model("Utilisateur", schema);
