<?php
// Calls for the config file
include( "inc/config.php" );



// Insert the information
$req = $bdd->prepare('INSERT INTO commandes (produit, nom, email_paypal, discord) VALUES(?, ?, ?, ?)');
$req->execute(array($_POST['produit'], $_POST['nom'], $_POST['email_paypal'], $_POST['discord']));

// Redirect user back to the add criminal page
header('Location: success.php');

?>
