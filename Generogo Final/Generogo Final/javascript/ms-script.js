//function to get data (id,objetName) from a json file
function getObjectDataFromJsonFile(path, key) {
    return $.get(path)
        .then(function(Objets) {
            return Objets.map(function(Objet) {
                var data = { id: Objet.id }
                data[key] = Objet[key];
                return data;
            });
        });
};
//variables
var msProject,
    msVersion = $('#msVersion').magicSuggest({ allowFreeEntries: false }),
    msComponent = $('#msComponent').magicSuggest({ allowFreeEntries: false }),
    msApi = $('#msApi').magicSuggest({}),
    msPerimeter = $('#msPerimeter').magicSuggest({}),
    selectedProjects;
//load event de la Page :
$(document).ready(function() {
    //get Project Data
    getObjectDataFromJsonFile('/api_jira/PROJECTS.json', 'name').
    then(function(Projects) {
        msProject = $('#msProject').magicSuggest({
            allowFreeEntries: false, //not allow free entries
            data: Projects,
            valueField: 'id',
            displayField: 'name'
        });
        //disable drop down ms list on load
        disableMS();
        //onselectchange event of msProject : get Version, component and perimeter
        $(msProject).on('selectionchange', function() {
            selectedProjects = this.getValue();
            getVersionFromJsonFile(selectedProjects);
            getComponentFromJsonFile(selectedProjects);
            getPerimeterFromJsonFile();
        });
    });
    // enable next button in step 2 when goRadio is checked
    enableNextButton2();
});
