<?php
include( "config.php" );

if(isset($_POST['deletecategorie']) and is_numeric($_POST['deletecategorie']))
{
  $id = $_POST['deletecategorie'];
  $count=$bdd->prepare("DELETE FROM categories WHERE id=:id");
  $count->bindParam(":id",$id,PDO::PARAM_INT);
  $count->execute();
  header('Location: ../admin/voir-categories.php');
};

if(isset($_POST['deleteproduit']) and is_numeric($_POST['deleteproduit']))
{
  $id = $_POST['deleteproduit'];
  $count=$bdd->prepare("DELETE FROM produits WHERE id=:id");
  $count->bindParam(":id",$id,PDO::PARAM_INT);
  $count->execute();
  header('Location: ../admin/voir-produits.php');
};

if(isset($_POST['deletecommande']) and is_numeric($_POST['deletecommande']))
{
  $id = $_POST['deletecommande'];
  $count=$bdd->prepare("DELETE FROM commandes WHERE id=:id");
  $count->bindParam(":id",$id,PDO::PARAM_INT);
  $count->execute();
  header('Location: ../admin/voir-commandes.php');
};

?>
