<?php
//call User class
require_once "models/User.php";
//new class Controller
class Controller {
  private $routes = [
      '/'            => 'homePage',
      '/login'       => 'loginPage',
      '/loginAction' => 'loginAction',
      '/signup'      => 'signupPage',
      '/signupAction' => 'signupAction',
      '/disconnect' => 'disconnectAction',
      '/connectionError'=> 'connectionErrorPage',
      '/contact' => 'contactPage',
      '/updateProfil' => 'updateProfilPage',
      '/updateProfilAction' => 'updateProfilAction',
      '/modalErrorSignup' => 'modalErrorPageSignup',
      '/modalErrorUpdate' => 'modalErrorPageUpdate'
  ];
  //function to test if user is connected
  public function isConnected() {
      return isset($_SESSION['username']) && !empty($_SESSION['username']);
  }
  //function to get the page
  public function getView () {
    //get the url
    $routeName = $_SERVER['REQUEST_URI'];
    //if the url is an index in the routes table
    if (array_key_exists($routeName, $this->routes)) {
      //get the value of the routes index
      $method = $this->routes[ $routeName ];
      //if the method exist, go to the method page, else go the home page
      if (method_exists('Controller', $method)) {
        $this->$method();
      } else {
          header('Location: /');
        }
    } else {
      header('Location: /');
    }
  }
  //function to go to the home page
  public function homePage () {
    //if user is not connected, go to login page else, load home page
    if(!$this->isConnected()){
      header('Location: /login');
      exit;
    }
    include 'views/nav.php';
    include 'views/pagePrincipale.php';
  }
  //function to go to the login page
  public function loginPage () {
    if($this->isConnected())
    {
      header('Location: /');
      exit;
    }
  include 'views/pageConnexion.php';
  }
  //function to go to the sign up page
  public function signupPage () {
    include 'views/pageInscription.php';
  }
  //function to check connection
  public function loginAction () {
    //check the username and the password input if they are not null
    if (isset($_POST['username']) && isset($_POST['password'])) {
      $user = new User($_POST['username'], sha1($_POST['password']));
      //execute login function
      $resultat = $user->login();
      if ($resultat) {
        header('Location: /');
      }
      else {
        header('Location: /connectionError');
      }
    }
  }
  //function to check signup
  public function signupAction(){
    if(isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['cpassword']) && $_POST['password'] === $_POST['cpassword'])
    {
      $user = new User($_POST['username'], sha1($_POST['password']), $_POST['firstname'], $_POST['lastname']);
      //execute signUp function
      $result = $user->signUp();
      if($result)
      {
        header('Location: /disconnect');
      }
      else {
        header('Location: /modalErrorSignup');
      }
    }
  }
  //function to disconnect user
  public function disconnectAction()
  {
    session_destroy();
    header('Location: /login');
  }
  //function to go to the connection error page
  public function connectionErrorPage()
  {
    include 'views/modal.php';
  }
  //function to go to the contact page
  public function contactPage()
  {
    if(!$this->isConnected())
    {
      header('Location: /login');
      exit;
    }
    include 'views/nav.php';
    include 'views/contact.php';
  }
  //function to go to the update profil page
  public function updateProfilPage()
  {
    if(!$this->isConnected())
    {
      header('Location: /login');
      exit;
    }
    include 'views/nav.php';
    include 'views/pageUpdateProfil.php';
  }
  //function to go to the signup page error
  public function modalErrorPageSignup()
  {
    include 'views/modalSameId.php';
  }
  //function to go to the update page error
  public function modalErrorPageUpdate()
  {
    if(!$this->isConnected())
    {
      header('Location: /login');
      exit;
    }
    include 'views/modalSameIdInUpdate.php';
  }
  //function to check update profil
  public function updateProfilAction(){
    if(!$this->isConnected())
    {
      header('Location: /login');
      exit;
    }
    if(isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['cpassword']) && $_POST['password'] === $_POST['cpassword'])
    {
      $user = new User($_POST['username'], sha1($_POST['password']), $_POST['firstname'], $_POST['lastname']);
      $result = $user->updateProfil();
      if($result)
      {
        header('Location: /disconnect');
      }
      else {
        header('Location: /modalErrorUpdate');
      }
    }
  }
}
?>
