//Variables for animation
jQuery('#sucess').hide();
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
//initiate variables
var msProject,
    msVersion = $('#msVersion').magicSuggest({ allowFreeEntries: false }),
    msComponent = $('#msComponent').magicSuggest({ allowFreeEntries: false }),
    msApi = $('#msApi').magicSuggest({}),
    msPerimeter = $('#msPerimeter').magicSuggest({}),
    selectedProjects;

//function to enable dropdown list ms
function enableMS() {
    //enable ms
    //console.log('one more');
    msVersion.enable();
    msComponent.enable();
    msApi.enable();
    msPerimeter.enable();
}
//function to disable dropdown list ms
function disableMS() {
    //console.log('free');
    msVersion.disable();
    msComponent.disable();
    msApi.disable();
    msPerimeter.disable();
}
//function to clean dropdown list ms and data
function cleanMS() {
    //clean dropdown list ms
    msVersion.clear();
    msComponent.clear();
    msApi.clear();
    msPerimeter.clear();
    //clean data
    msVersion.setData([]);
    msComponent.setData([]);
    msApi.setData([]);
    msPerimeter.setData([]);
}
//function to get list of versions from a json file
function getVersionFromJsonFile(selectedProjects) {
    if (selectedProjects.length == 0) {
        disableMS();
        cleanMS();
    } else {
        enableMS();
        cleanMS();
    }
    for (var i = 0; i < selectedProjects.length; i++) {
        $.get('../api_jira/Versions/' + selectedProjects[i] + '.json').
        then(function(versions) {
            var data = versions.map(function(version) {
                return { id: version.id, name: version.name }
            });
            var allData = msVersion.getData().concat(data);
            msVersion.setData(allData);
        });
    }
}
//function to get list of components from a json file
function getComponentFromJsonFile(selection) {
    for (var i = 0; i < selection.length; i++) {
        $.get('../api_jira/Projects/' + selection[i] + '.json').
        then(function(project) {
            var data = project.components.map(function(component) {
                return { id: component.id, name: component.name }
            });
            var allData = msComponent.getData().concat(data);
            msComponent.setData(allData);
        });
    }
}
//function to get list of perimeters from a json file
function getPerimeterFromJsonFile() {
    $.get('../api_jira/perimeter.json').
    then(function(perimeters) {
        var data = perimeters.map(function(perimeter) {
            return { id: perimeter.id, name: perimeter.name }
        })
        msPerimeter.setData(data);
    })
}
//function to get selected projects name
function getSelectedProjectsName() {
    var selectedProjectName = msProject.getSelection().map(function(project) {
        return project.name
    });
    return selectedProjectName;
}
//function to get selected versions name
function getSelectedVersionsName() {
    var selectedVersionName = msVersion.getSelection().map(function(version) {
        return version.name
    });
    return selectedVersionName;
}
//function to get selected components name
function getSelectedComponentsName() {
    var selectedComponentName = msComponent.getSelection().map(function(component) {
        return component.name
    });
    return selectedComponentName;
}
//function to get selected api's name
function getSelectedApiName() {
    var selectedApiName = msApi.getSelection().map(function(api) {
        return api.name
    });
    return selectedApiName;
}
//function to get selected perimeters
function getSelectedPerimetersName() {
    var selectedPerimeterName = msPerimeter.getSelection().map(function(perimeter) {
        return perimeter.name
    });
    return selectedPerimeterName;
}
//Variables to stock number of bugs
var closedInternalBlockingBugsNumber,closedCustomerBlockingBugsNumber, closedInternalMajorBugsNumber,closedCustomerMajorBugsNumber,closedInternalMediumBugsNumber,closedCustomerMediumBugsNumber,closedInternalMinorBugsNumber,closedCustomerMinorBugsNumber,notClosedInternalBlockingBugsNumber,notClosedCustomerBlockingBugsNumber,notClosedInternalMajorBugsNumber,notClosedCustomerMajorBugsNumber,notClosedInternalMediumBugsNumber,notClosedCustomerMediumBugsNumber,notClosedInternalMinorBugsNumber,notClosedCustomerMinorBugsNumber;
//next step 1 button click action, to insert in dom bugs
$(".next1").click(function insertBugsInformationInDOM() {
if (checkEntries() === true) {
    /*
    * Get information of bugs
    */
    //Variables
    //version name
    var version = getSelectedVersionsName()[0];
    //Priority name
    var blockingBug = '1.Bloquant';
    var majorBug = '2.Majeur';
    var mediumBug = '3.Normal';
    var minorBug = '4.Mineur';
    //Issuetype name
    var customerAnomaly = 'Anomalie';
    var internalAnomaly = 'Anomalie interne';
    //Status name
    var closedBug = 'Fermé', unresolvedBug = 'Non résolu ', inProgressBug = 'En cours', reopenedBug = 'Réouvert', resolvedBug = 'Résolu', inPreprodBug = 'En preprod';
    /////////////////////////////
    //Closed Bugs bloc
    ////////////////////////////
    //Closed Internal Blocking Bugs
    closedInternalBlockingBugsNumber = getBugsNumberInVersion(selectedProjects,version,closedBug,internalAnomaly,blockingBug);
    //Closed Customer Blocking Bugs
    closedCustomerBlockingBugsNumber = getBugsNumberInVersion(selectedProjects,version,closedBug,customerAnomaly,blockingBug);
    //Closed Internal Major Bugs
    closedInternalMajorBugsNumber = getBugsNumberInVersion(selectedProjects,version,closedBug,internalAnomaly,majorBug);
    //Closed Customer Major Bugs
    closedCustomerMajorBugsNumber = getBugsNumberInVersion(selectedProjects,version,closedBug,customerAnomaly,majorBug);
    //Closed Internal Medium Bugs
    closedInternalMediumBugsNumber = getBugsNumberInVersion(selectedProjects,version,closedBug,internalAnomaly,mediumBug);
    //Closed Customer Medium Bugs
    closedCustomerMediumBugsNumber = getBugsNumberInVersion(selectedProjects,version,closedBug,customerAnomaly,mediumBug);
    //Closed Internal Minor Bugs
    closedInternalMinorBugsNumber = getBugsNumberInVersion(selectedProjects,version,closedBug,internalAnomaly,minorBug);
    //Closed Customer Minor Bugs
    closedCustomerMinorBugsNumber = getBugsNumberInVersion(selectedProjects,version,closedBug,customerAnomaly,minorBug);
    /////////////////////////////
    //Not Closed Bugs bloc
    ////////////////////////////
    ///Not closed Internal Blocking Bugs
    notClosedInternalBlockingBugsNumber = getBugsNumberInProject(selectedProjects,unresolvedBug,internalAnomaly,blockingBug)+getBugsNumberInProject(selectedProjects,inProgressBug,internalAnomaly,blockingBug)+getBugsNumberInProject(selectedProjects,reopenedBug,internalAnomaly,blockingBug)+getBugsNumberInProject(selectedProjects,resolvedBug,internalAnomaly,blockingBug)+getBugsNumberInProject(selectedProjects,inPreprodBug,internalAnomaly,blockingBug);
    //Not closed Customer Blocking Bugs
    notClosedCustomerBlockingBugsNumber = getBugsNumberInProject(selectedProjects,unresolvedBug,customerAnomaly,blockingBug)+getBugsNumberInProject(selectedProjects,inProgressBug,customerAnomaly,blockingBug)+getBugsNumberInProject(selectedProjects,reopenedBug,customerAnomaly,blockingBug)+getBugsNumberInProject(selectedProjects,resolvedBug,customerAnomaly,blockingBug)+getBugsNumberInProject(selectedProjects,inPreprodBug,customerAnomaly,blockingBug);
    //Not Closed Internal Major Bugs
    notClosedInternalMajorBugsNumber = getBugsNumberInProject(selectedProjects,unresolvedBug,internalAnomaly,majorBug)+getBugsNumberInProject(selectedProjects,inProgressBug,internalAnomaly,majorBug)+getBugsNumberInProject(selectedProjects,reopenedBug,internalAnomaly,majorBug)+getBugsNumberInProject(selectedProjects,resolvedBug,internalAnomaly,majorBug)+getBugsNumberInProject(selectedProjects,inPreprodBug,internalAnomaly,majorBug);
    //not Closed Customer Major Bugs
    notClosedCustomerMajorBugsNumber = getBugsNumberInProject(selectedProjects,unresolvedBug,customerAnomaly,majorBug)+getBugsNumberInProject(selectedProjects,inProgressBug,customerAnomaly,majorBug)+getBugsNumberInProject(selectedProjects,reopenedBug,customerAnomaly,majorBug)+getBugsNumberInProject(selectedProjects,resolvedBug,customerAnomaly,majorBug)+getBugsNumberInProject(selectedProjects,inPreprodBug,customerAnomaly,majorBug);
    //not Closed Internal Medium Bugs
    notClosedInternalMediumBugsNumber = getBugsNumberInProject(selectedProjects,unresolvedBug,internalAnomaly,mediumBug)+getBugsNumberInProject(selectedProjects,inProgressBug,internalAnomaly,mediumBug)+getBugsNumberInProject(selectedProjects,reopenedBug,internalAnomaly,mediumBug)+getBugsNumberInProject(selectedProjects,resolvedBug,internalAnomaly,mediumBug)+getBugsNumberInProject(selectedProjects,inPreprodBug,internalAnomaly,mediumBug);
    //not Closed Customer Medium Bugs
    notClosedCustomerMediumBugsNumber = getBugsNumberInProject(selectedProjects,unresolvedBug,customerAnomaly,mediumBug)+getBugsNumberInProject(selectedProjects,inProgressBug,customerAnomaly,mediumBug)+getBugsNumberInProject(selectedProjects,reopenedBug,customerAnomaly,mediumBug)+getBugsNumberInProject(selectedProjects,resolvedBug,customerAnomaly,mediumBug)+getBugsNumberInProject(selectedProjects,inPreprodBug,customerAnomaly,mediumBug);
    //not Closed Internal Minor Bugs
    notClosedInternalMinorBugsNumber = getBugsNumberInProject(selectedProjects,unresolvedBug,internalAnomaly,minorBug)+getBugsNumberInProject(selectedProjects,inProgressBug,internalAnomaly,minorBug)+getBugsNumberInProject(selectedProjects,reopenedBug,internalAnomaly,minorBug)+getBugsNumberInProject(selectedProjects,resolvedBug,internalAnomaly,minorBug)+getBugsNumberInProject(selectedProjects,inPreprodBug,internalAnomaly,minorBug);
    //not Closed Customer Minor Bugs
    notClosedCustomerMinorBugsNumber = getBugsNumberInProject(selectedProjects,unresolvedBug,customerAnomaly,minorBug)+getBugsNumberInProject(selectedProjects,inProgressBug,customerAnomaly,minorBug)+getBugsNumberInProject(selectedProjects,reopenedBug,customerAnomaly,minorBug)+getBugsNumberInProject(selectedProjects,resolvedBug,customerAnomaly,minorBug)+getBugsNumberInProject(selectedProjects,inPreprodBug,customerAnomaly,minorBug);
    //Draw bar chart for closed bugs
    drawClosedBugsChart();
    //Draw bar chart for not closed bugs
    drawNotClosedBugsChart();
    //Insert number of bugs in DOM (step 2)
    //for closed bugs
    insertNumberofBugsInDOM("closedInternalBlockingBugs",closedInternalBlockingBugsNumber);
    insertNumberofBugsInDOM("closedCustomerBlockingBugs",closedCustomerBlockingBugsNumber);
    insertNumberofBugsInDOM("closedInternalMajorBugs",closedInternalMajorBugsNumber);
    insertNumberofBugsInDOM("closedCustomerMajorBugs",closedCustomerMajorBugsNumber);
    insertNumberofBugsInDOM("closedInternalMediumBugs",closedInternalMediumBugsNumber);
    insertNumberofBugsInDOM("closedCustomerMediumBugs",closedCustomerMediumBugsNumber);
    insertNumberofBugsInDOM("closedInternalMinorBugs",closedInternalMinorBugsNumber);
    insertNumberofBugsInDOM("closedCustomerMinorBugs",closedCustomerMinorBugsNumber);
    //for not closed bugs
    insertNumberofBugsInDOM("notClosedInternalBlockingBugs",notClosedInternalBlockingBugsNumber);
    insertNumberofBugsInDOM("notClosedCustomerBlockingBugs",notClosedCustomerBlockingBugsNumber);
    insertNumberofBugsInDOM("notClosedInternalMajorBugs",notClosedInternalMajorBugsNumber);
    insertNumberofBugsInDOM("notClosedCustomerMajorBugs",notClosedCustomerMajorBugsNumber);
    insertNumberofBugsInDOM("notClosedInternalMediumBugs",notClosedInternalMediumBugsNumber);
    insertNumberofBugsInDOM("notClosedCustomerMediumBugs",notClosedCustomerMediumBugsNumber);
    insertNumberofBugsInDOM("notClosedInternalMinorBugs",notClosedInternalMinorBugsNumber);
    insertNumberofBugsInDOM("notClosedCustomerMinorBugs",notClosedCustomerMinorBugsNumber);
    //insert in DOM the quality index
    insertQualityIndexInDOM("indiceQualite",getQualityIndex());
  }
})
//Function to draw bar chart for closed bugs
function drawClosedBugsChart() {
  var myChart = new Chart(document.getElementById("closedBugsColumnChart"), {
      type: 'bar',
      data: {
        labels: ["Bloquant", "Majeur", "Medium", "Mineur"],
        datasets: [
          {
            label: "Anomalies internes",
            backgroundColor: "#1B5C93",
            data: [closedInternalBlockingBugsNumber,closedInternalMajorBugsNumber,closedInternalMediumBugsNumber,closedInternalMinorBugsNumber]
          }, {
            label: "Anomalies Clients",
            backgroundColor: "#f77c4f",
            data: [closedCustomerBlockingBugsNumber,closedCustomerMajorBugsNumber,closedCustomerMediumBugsNumber,closedCustomerMinorBugsNumber]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Bugs fermés dans la version',
          fontSize : 16
        },
        legend : {
          position : 'bottom'
        }
      }
  });
}
//Function to draw bar chart for not closed bugs
function drawNotClosedBugsChart() {
    var myChart = new Chart(document.getElementById("notClosedBugsColumnChart"), {
        type: 'bar',
        data: {
          labels: ["Bloquant", "Majeur", "Medium", "Mineur"],
          datasets: [
            {
              label: "Anomalies internes",
              backgroundColor: "#1B5C93",
              data: [notClosedInternalBlockingBugsNumber,notClosedInternalMajorBugsNumber,notClosedInternalMediumBugsNumber,notClosedInternalMinorBugsNumber]
            }, {
              label: "Anomalies Clients",
              backgroundColor: "#f77c4f",
              data: [notClosedCustomerBlockingBugsNumber,notClosedCustomerMajorBugsNumber,notClosedCustomerMediumBugsNumber,notClosedCustomerMinorBugsNumber]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Bugs restant à corriger',
            fontSize : 16
          },
          legend : {
            position : 'bottom'
          }
        }
    });
}
//function to draw line chart for tendance
function drawTendanceChart(){
  var canvas = document.getElementById('tendanceChart');
  var data = {
    labels: ["ancienne version", "nouvelle version"],
    datasets: [
        {
            label: "Anomalies Internes",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(27,92,147,1)",
            borderColor: "rgba(27,92,147,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(27,92,147,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(27,92,147,1)",
            pointHoverBorderColor: "rgba(27,92,147,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [getPreviousVersionInternalBugsNumber(), sumNotClosedInternalBugs()],
        },
        {
        label: "Anomalies Clients",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(247,124,79,1)",
            borderColor: "rgba(247,124,79,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(247,124,79,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(247,124,79,1)",
            pointHoverBorderColor: "rgba(247,124,79,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [getPreviousVersionCustomerBugsNumber(), sumNotClosedCustomerBugs()],
        }
    ]
  };

  var option = {
  showLines: true,
  title: {
    display: true,
    text: 'Tendence',
    fontSize : 16
  },
  legend : {
    position : "bottom"
  }
  };
  var myLineChart = Chart.Line(canvas,{
  data:data,
  options:option
  });
}
//function to go to the next fieldset
$(".next").click(function goToNextStep() {
    if (checkEntries() === true) { //If the user enters a project, version, and perimeter, move to next step
        if (animating) return false;
        animating = true;
        current_fs = $(this).parent();
        //call get functions
        getSelectedProjectsName();
        getSelectedVersionsName();
        getSelectedComponentsName();
        getSelectedApiName();
        getSelectedPerimetersName();
        /*
        * Animation - move to next step
        */
        next_fs = $(this).parent().next();
        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        current_fs.hide(1000);
        animating = false;
        //this comes from the custom easing plugin
        easing: 'easeInOutBack';
    } else {
        //if the user doesn't enter a required field, Color borders in red
        document.getElementById('msProject').style.borderColor = "red";
        document.getElementById('msVersion').style.borderColor = "red";
        document.getElementById('msPerimeter').style.borderColor = "red";
    }
});
//function to go to the previous fieldset (step)
$(".previous").click(function() {
    if (animating) return false;
    animating = true;
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    //show the previous fieldset
    previous_fs.show();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    //hide the current fieldset with style
    current_fs.hide(1000);
    animating = false;
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
});
//function to check if we have a project + version
function checkEntries() {
    //check required field, if project, version and perimeter are selected
    if (getSelectedProjectsName().length === 0 || getSelectedVersionsName().length === 0 || getSelectedPerimetersName().length === 0) {
        return false;
    } else //go to next page
    {
        //goToNextStep();
        return true;
    }
}
