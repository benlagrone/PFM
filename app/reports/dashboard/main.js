/* master view model modifications for reports pages */

function reportsDashboardCustomizeMasterVM(params) {
    masterVM.spinnerText("Loading, Please Wait");
    masterVM.mainMenu.removeAll();
    masterVM.mainMenu.push(
            {id: "home", label: "Home", path: "home", file: "index.html", CSSclass: "", helpText: ""},
    {id: "leasecheck", label: "Lease Check", path: "leasecheck", file: "index.html", CSSclass: "", helpText: ""},
    {id: "leaseacquisition", label: "Lease Acquisition", path: "leaseacquisition", file: "index.html", CSSclass: "", helpText: ""},
    {id: "reports", label: "Reports", path: "reports", file: "index.html", CSSclass: "", helpText: ""},
    {id: "logout", label: "Logout", path: "logout", file: "index.html", CSSclass: "", helpText: ""}
    );
    masterVM.contextdata.removeAll();
    masterVM.contextdata.push(
            {id: "clientid", label: "Client ID", data: localStorage['_clientName']},
    {id: "projectid", label: "Project ID", data: localStorage['_projectName']},
    {id: "datecreated", label: "Date Created", data: "10/10/2012"},
    {id: "dateupdated", label: "Last Updated", data: "10/10/2013"}
    );
    //remove and then add the command men items
    masterVM.commandMenuButtons.removeAll();

    //add the sidebar menu items
    masterVM.sideNavMenuItems.removeAll();
    masterVM.sideNavMenuItems.push({
        id: "reports",
        label: "Report List",
        path: "reports",
        file: "index.html",
        CSSClass: "list",
        helpText: ""
    });
    masterVM.contextualButtons.removeAll();
    masterVM.contextualReports.removeAll();
    masterVM.relatedItems.removeAll();
    masterVM.relatedButtons.removeAll();
    masterVM.relatedButtons.push({id:"collapse",label:"<i class='halflings-icon chevron-down'></i>",action:function(){
            $('#relatedItemList').toggle();
        },CSSClass:"btn-minimize"});
    masterVM.relatedButtons.push({id:"close",label:"<i class='halflings-icon remove'></i>",action:function(){},CSSClass:"btn-close"});
    masterVM.modalTitle("Confirm Save");
    masterVM.modalHTML("You have not yet done what you came here to do.  Do you want to save before you leave?");
    masterVM.referencePointLabel("Do something here");
    masterVM.referencePoint("Hello world");
    masterVM.formMenuTitle("reports");

    masterVM.contextMenuTitle("reports");
    masterVM.currentPageLabel("reports");
    masterVM.menuHelpText("About the reports; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    masterVM.modalButtons.removeAll();
    
    masterVM.modalButtons.push({id: "cancel", label: "Cancel", action: function() {
            //cancelStandard();
        }, CSSClass: "foo"});
    masterVM.showMap("no");   
    //check for tract id in params
    var idparam = params.id ? params.id : null;
    reportsDashboardCallBindings(idparam);
};

/* reports list */
/* load the reports list here */
var reportsList = [
    {id:"Lorem-ipsum-dolor",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "},
    {id:"Lorem-ipsum-dolor",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "},
{id:"Lorem-ipsum-dolor",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "},
{id:"Lorem-ipsum-dolor",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "},
{id:"Lorem-ipsum-dolor",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "},
{id:"Lorem-ipsum-dolor",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "},
{id:"Lorem-ipsum-dolor",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "},
{id:"Lorem-ipsum-dolor",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "},
{id:"Lorem-ipsum-dolor",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "}
];

function loadReports(callback) {

    /*$.ajax({
        url: _apiBase + "Reports/",
        type: "GET",
        dataType: "json",
        beforeSend: function(request) {
            waitSpinnerStart();
            request.setRequestHeader("ClientId", localStorage['_clientId']);
            request.setRequestHeader("LandProjectId", localStorage['_projectId']);
            request.setRequestHeader("Audience", _apiAudience);
            request.setRequestHeader("AuthJWT", localStorage['_apiToken']);
            request.setRequestHeader("UserId", _loggedInUserId);
        },
        success: function(data, status, response) {
            //on success, 'data' contains a list of TractDto objects, load them
            reportsList = data;
            waitSpinnerStop();
            //save updated token
            localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");

            //run callback
            if (callback && callback.constructor === Function)
                callback();
        },
        fail: function(jqXHR, textStatus, errorThrown) {
            waitSpinnerStop();
            var msg = 'fail. response text: "' + jqXHR.responseText + '"';
            alert(msg);
        }
    });*/
var data = [
    {id:"foo1",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "},
    {id:"foo3",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "},
{id:"foo2",category:"bar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore "}
];
reportsList = data;
};

/* View Tract detail */
//load data from api
function loadReportDetail(reportId, callback) {
if (!reportId){
                reportsDashboardNewVM = new function() {
                this.title = ko.observable("New Tract");
                this.reportid = ko.observable("foo");
                this.reportid.subscribe(setCurrPageDirty);

            };
          if (callback && callback.constructor === Function)
                callback();
} else {
    //get token
    /*$.ajax({
        url: _apiBase + "Reports/" + reportId.toString(),
        type: "GET",
        dataType: "json",
        beforeSend: function(request) {
            waitSpinnerStart();
            request.setRequestHeader("ClientId", localStorage['_clientId']);
            request.setRequestHeader("LandProjectId", localStorage['_projectId']);
            request.setRequestHeader("Audience", _apiAudience);
            request.setRequestHeader("AuthJWT", localStorage['_apiToken']);
            request.setRequestHeader("UserId", _loggedInUserId);
        },
        success: function(data, status, response) {

            waitSpinnerStop();
            //on success, 'data' contains tract details, load them into the VM
            leasecheckTractNewVM = new function() {
                this.title = ko.observable("View Report " + reportId.toString());
                this.reportid = ko.observable(data.Id);
                this.reportid.subscribe(setCurrPageDirty);
                this.timestamp = data.Timestamp;
                console.log(data.Timestamp)
            };

            //save updated token
            localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");

            //run callback
            if (callback && callback.constructor === Function)
                callback();
        },
        fail: function(jqXHR, textStatus, errorThrown) {
            var msg = 'fail. response text: "' + jqXHR.responseText + '"';
            alert(msg);
            waitSpinnerStop();
        }
    });*/
    };
}

var reportsDashboardNewVM;	//will be initialized in API request callback
/* called in the routing.js, initializes the tracts viewmodels*/
function reportsDashboardIndexVM(itemsList) {

    title = ko.observable("View Reports");
    reports = ko.observableArray(itemsList);

};

/* Save Data */
function postData() {

};

function putData(params){

};

function deleteData(params) {

    };

/*Utility Functions*/


function reportsDashboardCallBindings(id) {
    var currentPage = pageRoute.page.split(".");
    var pageName = currentPage[0];
    switch (pageName)
    {
        case "index":
            //update global IsDirty logic
            _saveCurrPageFcn = null;
            //loadReports(function() {
                var idName = "#" + convertRoutDiv("-");
                ko.applyBindings(new reportsDashboardIndexVM(reportsList), $(idName)[0]);
            //});
            break;
        case "new":
            //update global IsDirty logic
            _saveCurrPageFcn = function() {

                alert("i'm saving your tract to the DB now.");
                //TODO: replace with API call
            };
            //if (id) {
                loadTractDetail(id, function() {
                    var idName = "#" + convertRoutDiv("-");
                    ko.applyBindings(reportsDashboardNewVM, $(idName)[0]);
                });
            break;
        default:
    };
}

