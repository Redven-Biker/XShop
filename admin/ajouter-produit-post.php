<?php
// Calls for the config file
include( "../inc/config.php" );



// Insert the information
$req = $bdd->prepare('INSERT INTO produits (nom, img, prix, categorie) VALUES(?, ?, ?, ?)');
$req->execute(array($_POST['nom'], $_POST['img'], $_POST['prix'], $_POST['categorie']));

// Redirect user back to the add criminal page
header('Location: voir-produits.php');

?>
