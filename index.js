// 1 - importations
const express = require("express");
const mongoose = require("mongoose");

// 2 - intialisation

const serveur = express();
//pour accepter le body JSON de Requete HTTP
serveur.use(express.json());
serveur.use(express.static("./"));
//bibliotheque uplouad

// connection au server de la base de données
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/Tayara", (erreur, success) => {
  if (erreur) {
    console.log("erreur");
  } else {
    console.log("success");
  }
});

require("./apis")(serveur);

// 4 - Lancement Server

/* const test = () => {
  console.log("serveur en cours");
};
serveur.listen(5000,test) */

serveur.listen(5000, () => {
  console.log("serveur en cours");
});
