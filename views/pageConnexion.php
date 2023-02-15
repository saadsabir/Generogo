<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <title>Genero'GO Connexion</title>
</head>
<body>
<!-- multistep form -->
<form id="ovform" method="POST" action="loginAction">
    <!-- fieldsets -->
    <fieldset>
        <h2 class="fs-title">Genero'GO</h2>
        <h3 class="fs-subtitle">Page de connexion</h3>
        <div display="block" >
          <input type="text" name="username" placeholder="Identifiant" />
        </div>
        <div display="block">
          <input type="password" name="password" placeholder="Mot de passe" />
        </div>
        <div>
            <input type="submit" name="connexion" class="next action-button" value="Connexion"/>
        </div>
        <div class="divMpOublie" display="block">
            <a href="" data-target="#mymodal" data-toggle="modal" class="mpOublie">Mot de passe oublié ?</a>
        </div>
        <!--Modal-->
        <div id="mymodal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <p>Contactez : generogo@oodrive.com</p>
                    </div>
                </div>
            </div>
        </div>
        <!--End of modal-->
    </fieldset>
</form>
</body>
</html>
<script src="javascript/jquery.min.js"></script>
<script src="javascript/jquery.validate.min.js"></script>
<script src="javascript/connexion-validation.js"></script>
<script type="text/Javascript" src="javascript/bootstrap.min.js"></script>
