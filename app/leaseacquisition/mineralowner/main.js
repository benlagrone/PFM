function leaseacquisitionInterestownerCustomizeMasterVM(){
    //TODO:  any other customizations of master view model
    masterVM.pageData.removeAll();
    masterVM.pageData.push(
    {
        title:"home",
        referenceTitle:"Tract ID",
        reference:"123456",
        projectClientId:"PFM LAND",
        projectProjectId:"Graceland 100",
        projectDateCreated:"10/10/2012",
        projectDateUpdated:"10/10/2013"
    });

    //remove and then add the command men items
    masterVM.commandMenuButtons.removeAll();
    masterVM.commandMenuButtons.push({
        id:"submit",
        label:"submit",
        value:"submit",
        CSSClass:"btn btn-primary"
    });
    masterVM.commandMenuButtons.push({
        id:"print",
        label:"print",
        value:"print",
        CSSClass:"btn"
    });


    masterVM.sideNavMenuItems.removeAll();
    masterVM.sideNavMenuItems.push({
        id:"tracts",
        label:"Tracts",
        path:"leaseacquisition/tract/index",
        file:"index.html",
        CSSClass:"list",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"newtract",
        label:"new",
        path:"leaseacquisition/tract/new",
        file:"index.html",
        CSSClass:"new",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"wells",
        label:"wells",
        path:"leaseacquisition/well/index",
        CSSClass:"list",
        file:"index.html",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"New well",
        label:"new",
        path:"leaseacquisition/well/new",
        CSSClass:"new",
        file:"index.html",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"leases",
        label:"leases",
        path:"leaseacquisition/lease/index",
        CSSClass:"list",
        file:"index.html",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"newlease",
        label:"new",
        path:"leaseacquisition/lease/new",
        CSSClass:"new",
        file:"index.html",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"interestowners",
        label:"Interest Owners",
        path:"leaseacquisition/interestowner/index",
        CSSClass:"list",
        file:"index.html",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"newinterestowner",
        label:"new",
        path:"leaseacquisition/interestowner/new",
        CSSClass:"new",
        file:"index.html",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"mineralinterest",
        label:"Mineral Interest",
        path:"leaseacquisition/mineralinterest/index",
        CSSClass:"list",
        file:"index.html",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"newmineralinterest",
        label:"new",
        path:"leaseacquisition/mineralinterest/new",
        CSSClass:"new",
        file:"index.html",
        helpText:""
    });


    masterVM.formMenuTitle("Interest Owners");
    
    masterVM.contextMenuTitle("Interest Owners");
    masterVM.currentPageLabel("interestowners");
    masterVM.menuHelpText("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
   
}

