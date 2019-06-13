<?php
//call database class
require 'Database.php';
//new class User 
class User {
  private $username;
  private $firstname;
  private $lastname;
  private $password;
  public function __construct($username, $password, $firstname = null, $lastname = null) {
    $this->username = $username;
    $this->password = $password;
    $this->firstname = $firstname;
    $this->lastname = $lastname;
  }
  //function to login
  public function logIn () {
    $success = false;
    $database = Database::getDatabaseConnexion();
    $req = $database->prepare("select * from utilisateur where identifiant = :username and motdepasse = :password");
    $req->bindValue(':username', $this->username, PDO::PARAM_STR);
    $req->bindValue(':password', $this->password, PDO::PARAM_STR);
    $req->execute();
    $count = $req->rowCount(); //retourn a value if a user exist and have this username and this password
    if ($count != 0)//if contains values
    {
        $success = true;
        $_SESSION['username'] = $this->username;
    }
    return $success;
  }
  //function of signUp (create a new user in database)
  public function signUp () {
    $result = false;
    if ($this->firstname !== null && $this->lastname !== null && $this->username !== null && $this->password !== null) {
      $database = Database::getDatabaseConnexion();
      $req = $database->prepare("select identifiant from utilisateur where identifiant = :username");
      $req->bindValue(':username', $this->username, PDO::PARAM_STR);
      $req->execute();
      $count = $req->rowCount();
      if ($count === 0)//if the username don't exists
      {
        $req = $database->prepare("insert into utilisateur(identifiant, motdepasse, nom, prenom) values(:username, :password, :firstname, :lastname)");
        $req->bindValue(':username', $this->username, PDO::PARAM_STR);
        $req->bindValue(':password', $this->password, PDO::PARAM_STR);
        $req->bindValue(':firstname', $this->firstname, PDO::PARAM_STR);
        $req->bindValue(':lastname', $this->lastname, PDO::PARAM_STR);
        $req->execute();
        $result = true;
        }
      }
      return $result;
  }
  //function to update profil in database
  public function updateProfil () {
    $result = false;
    if ($this->firstname !== null && $this->lastname !== null && $this->username !== null && $this->password !== null) {
      $database = Database::getDatabaseConnexion();
      $req = $database->prepare("select identifiant from utilisateur where identifiant = :username");
      $req->bindValue(':username', $this->username, PDO::PARAM_STR);
      $req->execute();
      $count = $req->rowCount();
      if ($count === 0)//if the username don't exists
      {
        $ancienIdentifiant=$_SESSION['username'];
        $database = Database::getDatabaseConnexion();
        $req = $database->prepare("update utilisateur set nom = :firstname,prenom = :lastname,identifiant = :username,motdepasse = :password where identifiant = '$ancienIdentifiant'");
        $req->bindValue(':username', $this->username, PDO::PARAM_STR);
        $req->bindValue(':password', $this->password, PDO::PARAM_STR);
        $req->bindValue(':firstname', $this->firstname, PDO::PARAM_STR);
        $req->bindValue(':lastname', $this->lastname, PDO::PARAM_STR);
        $req->execute();
        $result = true;
      }
    }
    return $result;
  }
}
