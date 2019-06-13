<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8"/>
 <link rel="stylesheet" type="text/css" href="css/style.css">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <!--My style  -->
 <link rel="stylesheet" type="text/css" href="css/style2.css">
 <!--Style Bootstrap-->
 <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
 <!--Style combobox magicSuggest-->
 <link rel="stylesheet" type="text/css" href="css/magicsuggest-min.css">
 <!--appel a des biblios js-->
 <script src="javascript/jquery.min.js"></script>
 <!--script Bootstrap-->
 <scrip src="javascript/bootstrap.min.js" ></script>
 <!--script bootstrap nav animation-->
 <script src="javascript/bootstrap-collapse.js"></script>
 <!--Mon script-->
 <script src="javascript/script.js"></script>
 <script src="javascript/jquery.validate.min.js"></script>
 <script src="javascript/inscription-validation.js"></script>
 <title>Modifier Profil</title>
</head>
<body>
<!-- multistep form -->
<form id="ovform"  method="POST" action="updateProfilAction">
  <!-- fieldsets -->
  <fieldset>
    <h2 class="fs-title">Genero'GO</h2>
    <h3 class="fs-subtitle">Modifier Profil</h3>
    <input type="text" name="firstname" placeholder="Nom"/>
    <input type="text" name="lastname" placeholder="Prénom" />
    <input type="text" name="username" placeholder="Identifiant" />
    <input type="password" id="mdp"  name="password" placeholder="Mot de passe" />
    <input type="password" name="cpassword" placeholder="Confirmation mot de passe" />
    <input type="submit" name="updateprofil" class="next action-button" value="Modifier"/>
  </fieldset>
</form>
</body>
</html>
