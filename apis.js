module.exports = (serveur) => {
  var multipart = require("connect-multiparty");
  var upload_produit = multipart({ uploadDir: "./uploads/produits" });
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
  const Produits = require("./Controllers/produits.controllers");
  serveur.get("/produit", Produits.afficher);
  serveur.get("/produit/:_id", Produits.details_Produits);
  serveur.post("/produit", upload_produit, Produits.ajouter_Produits);
  serveur.put("/produit/:_id", Produits.modifier_Produits);
  serveur.delete("/produit/:_id", Produits.delete_Produits);
  serveur.get("/filterByCategory/:categorie_id", Produits.filterByCategory);
  serveur.post("/filterAll", Produits.filterAll);
  //API Commande
  const Commande = require("./Controllers/commande.controllers");
  serveur.get("/commande", Commande.afficher);
  serveur.get("/commande/:_id", Commande.details_commande);
  serveur.post("/commande", Commande.ajouter_Commande);
  serveur.put("/commande/:_id", Commande.modifier_Commande);
  serveur.delete("/commande/:_id", Commande.delete_Commande);
  serveur.put("/modifier_etat/:_id/:etat", Commande.modier_etat);
};
