const mongoose = require("mongoose");

const schema = mongoose.Schema({
 
  nom: String,
 
});

module.exports = mongoose.model("Category", schema);
