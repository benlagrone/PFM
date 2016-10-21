function homeLogoutCustomizeMasterVM(){
    //TODO:  any other customizations of master view model
    masterVM.spinnerText("You are being logged out, please wait.");
    masterVM.showMap("yes"); 
    masterVM.mainMenu.removeAll();masterVM.mainMenu.push(
		//{id:"login",label:"Login",path:"login",file:"index.html",CSSclass:"",helpText:""}
	);
    masterVM.pageData.removeAll();
    masterVM.pageData.push(
    {
        title:"Logout",
    });

    masterVM.referencePointLabel("");
    masterVM.referencePoint("");
    masterVM.contextdata.removeAll();
    masterVM.commandMenuButtons.removeAll();
    masterVM.sideNavMenuItems.removeAll();
    masterVM.relatedTypes.removeAll();
    masterVM.relatedItems.removeAll();
    masterVM.relatedButtons.removeAll();
    masterVM.formMenuTitle("Logout");
    
    masterVM.contextMenuTitle("Logout");
    masterVM.currentPageLabel("Logout");
    masterVM.menuHelpText("");
    masterVM.showMap("no"); 
   
   forceLogout();
}

function homeLogoutIndexVM() {
    footext=ko.observable("Logout");
}

function homeLogoutCallBindings(){
}

