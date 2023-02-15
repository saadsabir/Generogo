<?php
session_start();
//call controller class
include_once 'controllers/Controller.php';
//initialise a controller
$controller = new Controller();
//get the page
$controller->getView();
?>
