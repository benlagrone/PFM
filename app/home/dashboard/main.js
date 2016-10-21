function homeDashboardCustomizeMasterVM(params) {
    //TODO:  any other customizations of master view model
    masterVM.pageData.removeAll();

    masterVM.showMap("yes");  
    masterVM.pageData.push(
            {
                title: "home",
                referenceTitle: "Tract ID",
                reference: "123456",
                projectClientId: localStorage['_clientName'],
                projectProjectId: localStorage['_projectName'],
                projectDateCreated: "10/10/2012",
                projectDateUpdated: "10/10/2013"
            });
    masterVM.mainMenu.removeAll();
    masterVM.mainMenu.push(
            {id: "home", label: "Home", path: "home", file: "index.html", CSSclass: "", helpText: ""},
    {id: "leasecheck", label: "Lease Check", path: "leasecheck", file: "index.html", CSSclass: "", helpText: ""},
    {id: "leaseacquisition", label: "Lease Acquisition", path: "leaseacquisition", file: "index.html", CSSclass: "", helpText: ""},
    {id: "reports", label: "Reports", path: "reports", file: "index.html", CSSclass: "", helpText: ""},
    {id: "logout", label: "Logout", path: "logout", file: "index.html", CSSclass: "", helpText: ""}
    );
    masterVM.referencePointLabel("Tract Reference");
    masterVM.referencePoint("123456");
    masterVM.formMenuTitle("Tracts");
    masterVM.contextdata.removeAll();
    masterVM.contextdata.push(
            {id: "clientid", label: "Client ID", data: localStorage['_clientName']},
    {id: "projectid", label: "Project ID", data: localStorage['_projectName']},
    {id: "datecreated", label: "Date Created", data: "10/10/2012"},
    {id: "dateupdated", label: "Last Updated", data: "10/10/2013"}
    );
    masterVM.commandMenuButtons.removeAll();
    masterVM.relatedTypes.removeAll();
    masterVM.relatedItems.removeAll();
    masterVM.relatedButtons.removeAll();
    masterVM.sideNavMenuItems.removeAll();
    masterVM.formMenuTitle("Home");
    masterVM.contextMenuTitle("Home");
    masterVM.currentPageLabel("home");
    masterVM.menuHelpText("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");


}

function homeDashboardIndexVM() {
    footext = ko.observable("Home");
}

function homeDashboardCallBindings() {
}