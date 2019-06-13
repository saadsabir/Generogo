<!DOCTYPE html>
<html lang="fr">
  <head>
  	<meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--Page style  -->
    <link rel="stylesheet" type="text/css" href="css/style2.css">
    <!--Bootstrap style-->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <!--Combobox magicSuggest style-->
    <link rel="stylesheet" type="text/css" href="css/magicsuggest-min.css">
  	<title>Genero'GO</title>
  </head>
  <body>
    <!--Navigation bar-->
    <!--Principal Form-->
    <div class="container">
        <form id="goform">
          <!--Progressbar-->
          <ul id="progressbar">
            <li class="active">Renseignement</li>
            <li>Vérification</li>
            <li>Terminer</li>
          </ul>
          <!--3 fieldsets-->
          <!--fieldset 1-->
          <fieldset id="fieldset1">
            <div class="form-group">
              <p class = "infoMsg">(*) champ obligatoire<p>
              <!--Projet-->
              <label for="project">Projet*</label>
              <input id="msProject" class="form-control" name="project" placeholder="Projet" required/>
              <!--Version-->
              <label for="version">Version*</label>
              <input id="msVersion" class="form-control" name="version" placeholder="Version" required/>
              <!--Component (optional)-->
              <label for="Component">Composant</label>
              <input id="msComponent" class="form-control" name="Component" placeholder="Composant (optionnel)" />
              <!--Build (optionnel)-->
              <label for="api">Dépendances</label>
              <input id="msApi" class="form-control" name="api" placeholder="Dépendances (optionnel)"/>
              <!--Périmètres de test-->
              <label for="perimetre">Périmètres de test*</label>
              <input id="msPerimeter" class="form-control" name="perimeter" placeholder="Périmètres de test" required/>
            </div>
            <input id="next1" type="button" name="next" class="btn btn-success action-button pull-right next next1" value="Suivant"/>
          </fieldset>
          <!--fieldset 2-->
          <fieldset id="fieldset2">
            <div class="form-group">
              <div class = "row">
                <div class="col-xs-6">
                  <table class="table table-sm">
                  <caption>Bugs fermés</caption>
                  <thead>
                    <th>#</th>
                    <th>Interne</th>
                    <th>Client</th>
                  </thead>
                  <tbody>
                    <tr class="danger">
                      <th scope="row">1. Bloquant</th>
                      <td id="closedInternalBlockingBugs"></td>
                      <td id="closedCustomerBlockingBugs"></td>
                    </tr>
                    <tr class="warning">
                      <th scope="row">2. Majeur</th>
                      <td id="closedInternalMajorBugs"></td>
                      <td id="closedCustomerMajorBugs"></td>
                    </tr>
                    <tr class="success">
                      <th scope="row">3. Normal</th>
                      <td id="closedInternalMediumBugs"></td>
                      <td id="closedCustomerMediumBugs"></td>
                    </tr>
                    <tr class="active">
                      <th scope="row">4. Mineur</th>
                      <td id="closedInternalMinorBugs"></td>
                      <td id="closedCustomerMinorBugs"></td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div class = "col-xs-6">
                  <table class="table table-sm">
                    <caption>Bugs restant à corriger</caption>
                    <thead>
                  <th>#</th>
                  <th>Interne</th>
                  <th>Client</th>
                </thead>
                    <tbody>
                  <tr class="danger">
                    <th scope="row">1. Bloquant</th>
                    <td id="notClosedInternalBlockingBugs"></td>
                    <td id="notClosedCustomerBlockingBugs"></td>
                  </tr>
                  <tr class ="warning">
                    <th scope="row">2. Majeur</th>
                    <td id="notClosedInternalMajorBugs"></td>
                    <td id="notClosedCustomerMajorBugs"></td>
                  </tr>
                  <tr class="success">
                    <th scope="row">3. Normal</th>
                    <td id="notClosedInternalMediumBugs"></td>
                    <td id="notClosedCustomerMediumBugs"></td>
                  </tr>
                  <tr class = "active">
                    <th scope="row">4. Mineur</th>
                    <td id="notClosedInternalMinorBugs"></td>
                    <td id="notClosedCustomerMinorBugs"></td>
                  </tr>
                </tbody>
                  </table>
                </div>
              </div>
              <h4 class = "h4">Décision</h4>
              <p class = "infoMsg">(*) champ obligatoire</p>
              <p class = "infoMsg">Veuillez suivre l'ordre des champs puis choisir une décision finale</p>
              <label>Observation*</label>
              <textarea id = "observation" class="form-control" rows="5"></textarea>
              <label>Avertissement (optionnel)</label>
              <textarea id= "avertissement" class="form-control" rows="5"></textarea>
              <label>Indice Qualité</label>
              <label id= "indiceQualite"> </label>
              <label class="quality_index">[1000 000 X (Nbre d'AI 'Bloquantes'+Nbre AC 'Majeures')+ X 1 000 X (Nbre d'AI 'Majeures'+Nbre AC 'normales')+1 X (Nbre AI 'Normales' + Nbre AC 'mineures') + (Nbre d'AI 'mineures')/100]</label>
              <label>Features importantes*</label>
              <textarea id = "features" class="form-control" rows="5"></textarea>
              <div class="row">
                <div class="col-xs-6">
                  <label>Nombre d'anomalies internes dans la version précédente*</label>
                </div>
                <div class="col-xs-2 textboxCol">
                  <input class="form-control" type="number" min="0" id="previousVersionInternalBugsNumber" type="text">
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6">
                  <label>Nombre d'anomalies clients dans la version précédente*</label>
                </div>
                <div class="col-xs-2 textboxCol">
                  <input class="form-control" type="number" min="0" id="previousVersionCustomerBugsNumber" type="text">
                </div>
              </div>
            </div>
              <label>Feuille de GO*</label><br>
              <label class="radio-inline"><input type="radio" name="feuilleGoRadio" value = "MEP">MEP</label>
              <label class="radio-inline"><input type="radio" name="feuilleGoRadio" value = "MEPI">MEPI</label>
              <h3>Décision finale*</h3>
              <label class="radio-inline"><input type="radio" name="goRadio" value = "GO">DONE GO</label>
              <label class="radio-inline"><input type="radio" name="goRadio" value = "NO GO">NO GO</label><br>
            <input id="next2" type="button" name="next" class="btn btn-success pull-right next next2" value="Suivant" disabled="true" />
            <input type="button" name="previous" class="previous btn btn-success action-button pull-right" value="Précédent"/>
          </fieldset>
          <!--fieldset 3-->
          <fieldset id="fieldset3">
              <div class="row">
                <div class="col-xs-6">
                  <h3 class = "oodrive">OODRIVE</h3>
                  <h5 id = "typeGO" class = "title1"> </h5>
                  <br>
                  <h5 id = "projectName" class = "title2"> </h5>
                  <h5 id="componentName" class = "title2"> <h5>
                  <h5 id = "projectVersion" class = "title2"> </h5>
                  <h5 id = "projectAPI" class = "title2"> </h5>
                </div>
                <div class="col-xs-6">
                  <img id="goTypePicture" class ="img-responsive">
                </div>
              </div>
              <br>
              <div class="col">
                <h5 class = "title3">Observation : </h5>
                <p id = "projectObservation"></p>
              </div>
              <div class="col">
                <h5 class = "title3">Avertissement : </h5>
                <p id ="projectWarning" ></p>
              </div>
              <div class="col">
                <h5 class = "title3 inline">Indice Qualité : </h5>
                <label id ="indiceQualite2"></label>
              </div>
              <br>
                <div class="col features">
                  <h5 class = "title4">Features</h5>
                  <p id = "projectFeatures"></p>
                </div>
                <div class="row">
                  <br>
                  <div class="col-xs-6 border-col">
                    <canvas id="closedBugsColumnChart" ></canvas>
                  </div>
                  <div class="col-xs-6">
                    <h5 class = "title4">Environnements</h5>
                    <p id = "projectPerimeter"></p>
                  </div>
                </div>
                <div class="row">
                  <h5 class = "backlog title4">BACKLOG</h5>
                  <br>
                  <div class="col-xs-6 border-col">
                    <canvas id="notClosedBugsColumnChart" ></canvas>
                  </div>
                  <div class="col-xs-6">
                    <canvas id="tendanceChart" ></canvas>
                  </div>
                </div>
                <input type = "button" name="print" onclick="printDiv('#fieldset3')" class="btn btn-success pull-right submit" value="Imprimer"/>
                <input type="button" name="previous" class="previous btn btn-success action-button pull-right" value="Précédent"/>
          </fieldset>
        </form>
    </div>
  </body>
</html>
<!--script files calling-->
<!--jquery calling-->
<script src="../javascript/jquery.min.js"></script>
<!--jquery fieldset animation calling-->
<script src="../javascript/jquery.easing.min.js"></script>
<!--Bootstrap calling-->
<scrip src="../javascript/bootstrap.min.js" ></script>
<!--script bootstrap nav animation calling-->
<script src="../javascript/bootstrap-collapse.js"></script>
<!--script magicsuggest Combobox calling-->
<script src="../javascript/magicsuggest/magicsuggest-min.js"></script>
<!--script chartjs calling-->
<script src="../javascript/Chart.js"></script>
<!--personnal script calling-->
<script src="../javascript/step1Information.js"></script>
<script src="../javascript/step2Verification.js"></script>
<script src="../javascript/step3.js"></script>
<script src="../javascript/ms-script.js"></script>
<script src="../javascript/printThis.js"></script>
