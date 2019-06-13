//function to insert in dom (step 3) the type of the GO
function insertTypeGOInDOM() {
    var oldValue = "FEUILLE DE GO ";
    document.getElementById("typeGO").innerHTML = oldValue + getTypeGo();
}
//function to insert in dom (step 3) the name of Project
function insertProjectNameInDOM() {
    var oldValue = "<b><u>Nom du Projet :</u></b> ";
    document.getElementById("projectName").innerHTML = oldValue + getSelectedProjectsName();
}
//function to insert in dom (step 3) the name of version
function insertProjectVersionInDOM() {
    var oldvalue = "<b><u>Version :</u></b> ";
    document.getElementById("projectVersion").innerHTML = oldvalue + getSelectedVersionsName();
}
//function to insert in dom (step 3) the name of component
function insertProjectComponentInDOM() {
    var oldvalue = "<b><u>Composant :</u></b> ";
    document.getElementById("componentName").innerHTML = oldvalue + getSelectedComponentsName();
}
//function to insert in dom (step 3) the API name
function insertProjectAPIInDOM() {
    var oldvalue = "<b><u>Dépendances :</u></b> ";
    document.getElementById("projectAPI").innerHTML = oldvalue + getSelectedApiName();
}
//function to insert in dom (step 3) the Perimeter
function insertProjectPerimeterInDOM() {
    var oldvalue = "";
    document.getElementById("projectPerimeter").innerHTML = oldvalue + getSelectedPerimetersName();
}
//function to insert in dom (step 3) the observation
function insertProjectObservationInDOM() {
    var oldvalue = "";
    document.getElementById("projectObservation").innerHTML = oldvalue + getObservation();
}
//function to insert in dom (step 3) the warning
function insertWarningInDOM() {
    var oldvalue = "";
    document.getElementById("projectWarning").innerHTML = oldvalue + getAvertissement();
}
//function to insert in dom (step 3) the features
function insertProjectFeaturesInDOM() {
    var oldvalue = "";
    document.getElementById("projectFeatures").innerHTML = oldvalue + getFeatures();
}
//function to insert picture of GO or picture (green) of NO GO (red)
function insertGOPicture() {
    if (getGoDecision() === "GO") {
        console.log("GO ! logo green");
        document.getElementById("goTypePicture").setAttribute("src","img_sources/goTypes/go.png");
    } else if (getGoDecision() === "NO GO") {
        //red logo
        document.getElementById("goTypePicture").setAttribute("src","img_sources/goTypes/nogo.jpg");
    } else {
        console.log("check getGoDecision returns");
    }
}
/*
* Function return number of bugs
* @param getProject : id of project
* getVersion : name of version
* getStatus : name of status 'Fermé','Non résolu ', 'En preprod', 'Résolu', 'Réouvert', 'En cours'
* getIssuetype : name of type issue : 'Anomalie', 'Anomalie interne'
* getPriority : name of priority : '1.Bloquant','2.Majeur','3.Normal','4.Mineur'
*/
function getBugsNumberInVersion(getProject,getVersion,getStatus,getIssuetype,getPriority)
{
  var results = 0;
  var issues,fields,versions,versionName,status,statusName,issuetype,issuetypeName, priority, priorityName;
  for(var i=0;i<getProject.length;i++)
  {
    $.ajax({
      async : false,
      url : './api_jira/Bugs/' + getProject[i] + '.json', success : function(data) {
      issues = data.issues;
      //fields loop
      for (var i=0;i<issues.length;i++)
      {
        //get fields
        fields = issues[i].fields;
        //get versions
        versions = fields.versions;
        //foreach version
        //versions loop
        for(var j=0;j<versions.length;j++)
        {
          //get name version
          versionName = versions[j].name;
          //get name version 1.5.0
          if(versionName === getVersion)
          {
            //get status
            status = fields.status;
            statusName = status.name;
            if(statusName === getStatus)
            {
              issuetype = fields.issuetype;
              issuetypeName = issuetype.name;
              if(issuetypeName === getIssuetype)
              {
                priority = fields.priority;
                priorityName = priority.name;
                if(priorityName === getPriority)
                {
                   results++;
                }
              }
            }
          }
        }
      }
    }
  })
}
  return results;
}
function getBugsNumberInProject(getProject,getStatus,getIssuetype,getPriority)
{
  var results = 0;
  var issues,fields,status,statusName,issuetype,issuetypeName, priority, priorityName;
  for(var i=0;i<getProject.length;i++)
  {
    $.ajax({
      async : false,
      url : './api_jira/Bugs/' + getProject[i] + '.json', success : function(data) {
      issues = data.issues;
      //fields loop
      for (var i=0;i<issues.length;i++)
      {
        //get fields
        fields = issues[i].fields;
            //get status
            status = fields.status;
            statusName = status.name;
            if(statusName === getStatus)
            {
              issuetype = fields.issuetype;
              issuetypeName = issuetype.name;
              if(issuetypeName === getIssuetype)
              {
                priority = fields.priority;
                priorityName = priority.name;
                if(priorityName === getPriority)
                {
                   results++;
                }
              }
            }
      }
    }
  })
}
  return results;
}
  function printDiv(divName){
  $(divName).printThis({
    importCSS : false,
    importStyle: true,
    printContainer: true,
    loadCSS : ["../css/style2.css","../css/bootstrap.min.css"],
    canvas: true,
    formValues: false,
    removeScripts: true
  });
}
