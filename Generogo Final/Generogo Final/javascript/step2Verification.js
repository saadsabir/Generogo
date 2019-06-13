//function to get observation value
function getObservation() {
    var observation = "";
    observation = $('#observation').val();
    return observation; //return text in the textarea
}
//function to get avertissement value
function getAvertissement() {
    var avertissement = "";
    avertissement = $('#avertissement').val();
    return avertissement; //return text in the textarea
}
//function to get indice quality value
function getProjectQualityIndex() {
    var indiceQualite = "";
    indiceQualite = $('#indiceQualite').val();
    return indiceQualite;
}
//function to get features value
function getFeatures() {
    var features = "";
    features = $('#features').val();
    return features; //return text in the textarea
}
//function to get Feuille GO type  value
function getTypeGo() {
    var typeGo = "";
    typeGo = $('input[name=feuilleGoRadio]:checked').val();
    return typeGo; //return GO or NO GO or undefined
}
//function to get goDecision value
function getGoDecision() {
    var goDecision = "";
    goDecision = $('input[name=goRadio]:checked').val();
    return goDecision; //return GO or NO GO or undefined
}
//function to get previousVersionInternalBugsNumber value
function getPreviousVersionInternalBugsNumber() {
    var nbr = "";
    nbr = $('#previousVersionInternalBugsNumber').val();
    return nbr; //return number of bugs
}
//function to get previousVersionCustomerBugsNumber value
function getPreviousVersionCustomerBugsNumber() {
    var nbr = "";
    nbr = $('#previousVersionCustomerBugsNumber').val();
    return nbr; //return number of bugs
}
//next step 2 button click action (go to step 3)
$(".next2").click(function loadContentInDOM() {
  //insert informations in DOM of step 3
    insertTypeGOInDOM();
    insertProjectNameInDOM();
    insertProjectComponentInDOM();
    insertProjectVersionInDOM();
    insertProjectAPIInDOM();
    insertProjectPerimeterInDOM();
    insertProjectObservationInDOM();
    insertWarningInDOM();
    insertProjectFeaturesInDOM();
    insertGOPicture();
    //insert in DOM the quality index
    insertQualityIndexInDOM("indiceQualite2",getQualityIndex());
    //Draw line chart for tendance
    drawTendanceChart();
})
//function to enable next button in step 2 when goRadio is checked
function enableNextButton2() {
    $('input[type=radio][name=goRadio]').change(function() {
        if (getObservation() !== "" && getFeatures() !== "" && getPreviousVersionCustomerBugsNumber() !=="" && getPreviousVersionInternalBugsNumber() !== "" && getTypeGo() !== undefined) {
            document.getElementById('next2').disabled = false;
        } else {
            document.getElementById('next2').disabled = true;
        }
    });
}
//functions to write in DOM bugs results
function insertNumberofBugsInDOM(id,value) {
    var oldvalue = "";
    document.getElementById(id).innerHTML = oldvalue + value;
}
//function to get the value of quality index
function getQualityIndex(){
  var sum = (1000000*(notClosedInternalBlockingBugsNumber*notClosedCustomerMajorBugsNumber)+1000*(notClosedInternalMajorBugsNumber+notClosedCustomerMediumBugsNumber)+1*(notClosedInternalMediumBugsNumber+notClosedCustomerMinorBugsNumber+notClosedInternalMinorBugsNumber)/100);
  return sum;
}
//function to write in DOM Quality Index
function insertQualityIndexInDOM(id,getQualityIndex){
  document.getElementById(id).innerHTML = getQualityIndex;
}
//function to calculate the total of not closed internal bugs
function sumNotClosedInternalBugs()
{
  var sum = notClosedInternalBlockingBugsNumber+notClosedInternalMajorBugsNumber+notClosedInternalMediumBugsNumber+notClosedInternalMinorBugsNumber;
  return sum;
}
//function to calculate the total of not closed customer bugs
function sumNotClosedCustomerBugs()
{
  var sum = notClosedCustomerBlockingBugsNumber+notClosedCustomerMajorBugsNumber+notClosedCustomerMediumBugsNumber+notClosedCustomerMinorBugsNumber;
  return sum;
}
