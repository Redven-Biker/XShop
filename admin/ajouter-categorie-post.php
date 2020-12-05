<?php
// Calls for the config file
include( "../inc/config.php" );



// Insert the information
$req = $bdd->prepare('INSERT INTO categories (nom) VALUES(?)');
$req->execute(array($_POST['nom']));

// Redirect user back to the add criminal page
header('Location: voir-categories.php');

?>
