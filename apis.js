module.exports = (serveur) => {
  //API Utilisateur
  const Utilisateur = require("./Controllers/utlisateurs.controllers");
  serveur.get("/utilsateur", Utilisateur.afficher);
  serveur.get("/utilsateur/:_id", Utilisateur.details_Utilisateur);
  serveur.post("/utilsateur", Utilisateur.ajouter_Utilisateur);
  serveur.put("/utilsateur/:_id", Utilisateur.modifier_Utilisateur);
  serveur.delete("/utilsateur/:_id", Utilisateur.delete_Utilisateur);
  serveur.post("/inscription", Utilisateur.inscription_Utilisateur);
  serveur.post("/connection", Utilisateur.connection);
  //API Category
  const Category = require("./Controllers/category.controllers ");
  serveur.get("/category", Category.afficher);
  serveur.get("/category/:_id", Category.details_Category);
  serveur.post("/category", Category.ajouter_Category);
  serveur.put("/category/:_id", Category.modifier_Category);
  serveur.delete("/category/:_id", Category.delete_Category);
  //API Produits
  const Produits = require("./Controllers/category.controllers ");
  serveur.get("/produit", Produits.afficher);
  serveur.get("/produit/:_id", Produits.details_Category);
  serveur.post("/produit", Produits.ajouter_Category);
  serveur.put("/produit/:_id", Produits.modifier_Category);
  serveur.delete("/produit/:_id", Produits.delete_Category);
};
