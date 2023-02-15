 <!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8"/>
 	<link rel="stylesheet" type="text/css" href="css/style.css">
  <script src="javascript/jquery.min.js"></script>
  <script src="javascript/jquery.validate.min.js"></script>
  <script src="javascript/inscription-validation.js"></script>
 	<title>Genero'GO Admin</title>
 </head>
 <body>
 <!-- multistep form -->
 <form id="ovform"  method="POST" action="/signupAction">
   <!-- fieldsets -->
   <fieldset>
     <h2 class="fs-title">Genero'GO</h2>
     <h3 class="fs-subtitle">Création de compte</h3>
     <input type="text" name="firstname" placeholder="Nom" />
     <input type="text" name="lastname" placeholder="Prénom" />
     <input type="text" name="username" placeholder="Identifiant" />
     <input type="password" id="mdp"  name="password" placeholder="Mot de passe" />
     <input type="password" name="cpassword" placeholder="Confirmation mot de passe" />
     <input type="submit" name="signup" class="next action-button" value="Valider"/>
   </fieldset>
 </form>
 </body>
 </html>
