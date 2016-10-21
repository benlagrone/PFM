/* master view model modifications for Leases pages*/
function leasecheckLeaseCustomizeMasterVM(params) {
    masterVM.showMap('foo');
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
    switch (pageRoute.page)
    {
        case "index.html":
            break;
        case "new.html":
            masterVM.commandMenuButtons.push({
                id: "submit",
                label: "save",
                value: "save",
                CSSClass: "btn btn-primary",
                action: function() {
                    if (params.id) {
                        putLease("saveAndStay", params);
                    } else {
                        postLease("gotToNewId");
                    }
                    ;
                }
            });
            masterVM.commandMenuButtons.push({
                id: "submit",
                label: "save & new",
                value: "save & new",
                CSSClass: "btn btn-primary",
                action: function() {
                    if (params.id) {
                        putLease("gotToNoId", params);
                    } else {
                        postLease("gotToNoId");
                    }
                }
            });
            if (params.id)
                masterVM.commandMenuButtons.push({
                    id: "delete",
                    label: "delete",
                    value: "delete",
                    CSSClass: "btn btn-danger",
                    action: function() {
                        require(["infinitegis/services"], function() {
                            deleteItem(params.id, "Leases");
                        });
                    }
                });
            break;
        default:
    }

    masterVM.commandMenuButtons.push({
        id: "print",
        label: "print",
        value: "print",
        CSSClass: "btn",
        action: function() {
            window.print();
        }
    });

    //add the sidebar menu items
    masterVM.sideNavMenuItems.removeAll();
    masterVM.sideNavMenuItems.push({
        id: "tracts",
        label: "Tracts",
        path: "leasecheck/tract/index",
        file: "index.html",
        CSSClass: "list",
        helpText: ""
    });
    masterVM.sideNavMenuItems.push({
        id: "newtract",
        label: "new",
        path: "leasecheck/tract/new",
        file: "new.html",
        CSSClass: "new",
        helpText: ""
    });
    masterVM.sideNavMenuItems.push({
        id: "wells",
        label: "wells",
        path: "leasecheck/well/index",
        CSSClass: "list",
        file: "index.html",
        helpText: ""
    });
    masterVM.sideNavMenuItems.push({
        id: "New well",
        label: "new",
        path: "leasecheck/well/new",
        CSSClass: "new",
        file: "new.html",
        helpText: ""
    });
    masterVM.sideNavMenuItems.push({
        id: "leases",
        label: "leases",
        path: "leasecheck/lease/index",
        CSSClass: "list",
        file: "index.html",
        helpText: ""
    });
    masterVM.sideNavMenuItems.push({
        id: "newlease",
        label: "new",
        path: "leasecheck/lease/new",
        CSSClass: "new",
        file: "index.html",
        helpText: ""
    });
    masterVM.sideNavMenuItems.push({
        id:"interestowners",
        label:"Interest Owners",
        path:"leasecheck/interestowner/index",
        CSSClass:"list",
        file:"index.html",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"newinterestowner",
        label:"new",
        path:"leasecheck/interestowner/new",
        CSSClass:"new",
        file:"index.html",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"mineralinterest",
        label:"Mineral Interest",
        path:"leasecheck/mineralinterest/index",
        CSSClass:"list",
        file:"index.html",
        helpText:""
    });
    masterVM.sideNavMenuItems.push({
        id:"newmineralinterest",
        label:"new",
        path:"leasecheck/mineralinterest/new",
        CSSClass:"new",
        file:"index.html",
        helpText:""
    });
    
    masterVM.contextualButtons.removeAll();
    masterVM.contextualButtons.push({id: "collapse", label: "<i class='white halflings-icon chevron-down'></i>", action: function() {
            $('#contextualReports').toggle();
        }, CSSClass: "btn-minimize"});
    masterVM.contextualReports.removeAll();
    masterVM.contextualReports.push({id: "something1", name: "something1", data1: "something", data2: "deathstar"});
    masterVM.contextualReports.push({id: "something2", name: "something2", data1: "something", data2: "deathstar"});
    masterVM.contextualReports.push({id: "something3", name: "something3", data1: "something", data2: "deathstar"});
    masterVM.contextualReports.push({id: "something4", name: "something4", data1: "something", data2: "deathstar"});
    masterVM.relatedItems.removeAll();
    masterVM.relatedType("Related Data");
    masterVM.relatedButtons.removeAll();
    masterVM.relatedButtons.push({id: "collapse", label: "<i class='halflings-icon chevron-down'></i>", action: function() {
            $('#relatedItemList').toggle();
        }, CSSClass: "btn-minimize"});
    masterVM.relatedTypes.removeAll();
    masterVM.modalTitle("Confirm Save");
    masterVM.modalHTML("You have not yet saved what you entered on this page.  Do you want to save before you leave?");

    params.id ? masterVM.referencePointLabel("Lease ID") : masterVM.referencePointLabel("Create");
    params.id ? masterVM.referencePoint(params.id) : masterVM.referencePoint("New Lease");
    masterVM.formMenuTitle("Leases");

    masterVM.contextMenuTitle("Leases");
    masterVM.currentPageLabel("Leases");
    masterVM.menuHelpText("About the Lease; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    masterVM.modalButtons.removeAll();
    masterVM.modalButtons.push({id: "notSaveLeave", label: "Leave Without Saving", action: function() {
            $('#myModal').on('hidden.bs.modal', function() {
                require(["dojo/hash"], function(hash) {
                    _currPageIsDirty = false;
                    console.log(params.id)
                    if (params.id) {
                        hash($('a#saveLeave').data('sentlink'));
                    } else {
                        if ($('a#saveLeave').data('sentlink') == "leasecheck/lease/index") {
                            hash("leasecheck/lease/index");
                        } else {
                            leasecheckLeaseCallBindings();
                            hash($('a#saveLeave').data('sentlink'));
                        }
                    }
                });
            });
        }, CSSClass: ""});
    masterVM.modalButtons.push({id: "saveLeave", label: "Save & Leave", action: function() {
            require(["dojo/hash"], function(hash) {
                hash($('a#saveLeave').data('sentlink'));
            });
            if (params.id) {
                putLease(masterVM.modalSentLink(), params);
            } else {
                var theLink = masterVM.modalSentLink();
                postLease(theLink);

            }
            ;
        }, CSSClass: ""});
    masterVM.modalButtons.push({id: "saveStay", label: "Save & Stay", action: function() {
            if (params.id) {
                putLease("stay", params);
            } else {
                postLease("gotToNewId");
            }
        }, CSSClass: ""});
    masterVM.modalButtons.push({id: "cancel", label: "Cancel", action: function() {
            //cancelStandard();
        }, CSSClass: ""});

    //check for lease id in params
    var idparam = params.id ? params.id : null;
    leasecheckLeaseCallBindings(idparam);
}

/* leases list */
/* load the leases list here */
var tempList = [];

function loadLeases(callback) {
    require(["infinitegis/services"], function() {
        getLists("Leases", callback);
    });
}

/* new leases*/
function loadNewLease(callback) {
    leasecheckLeaseNewVM = new function() {
       //getLeaseTypes();
        //getLeaseStatuses();
        //getLeasePayStatuses();
        this.title = ko.observable("New Lease");
        
        this.royaltyOptions = ko.observableArray(['']);
        //this.payStatusOptions = ko.observableArray(['']);
        //this.leaseTypeOptions = ko.observableArray(['']);
        //this.type = ko.observable();
        //this.leaseStatus = ko.observable(); 
        //this.payStatus = ko.observable();
        
        this.leaseNumber = ko.observable();
        this.lessor = ko.observable();
        this.lessee = ko.observable();
        this.royalty = ko.observable();
        this.termOfLease = ko.observable();
        this.simpleDescription = ko.observable();
        this.effectiveDate = ko.observable();
        this.leaseDate = ko.observable();
        this.filedDate = ko.observable();
        this.extension = ko.observable();
        this.recordingInformation = ko.observable();
        this.leaseNumber = ko.observable();
        this.notes = ko.observable();
    };
        if (callback && callback.constructor === Function)
        callback();
}


/* LOAD EXISTING lease*/
function loadLeaseId(data, apiCall) {
    leasecheckLeaseNewVM = new function() {
        //getLeaseTypes(data.TypeId);
        //getLeaseStatuses(data.StatusId);
        //getLeasePayStatuses(data.PayStatusId);
        this.royaltyOptions = ko.observableArray(['']);
        
        this.title = ko.observable("View Lease " + data.Id);
                
        this.leaseNumber = ko.observable(data.LeaseNo);
        this.lessor = ko.observable(data.Lessee);
        this.lessee = ko.observable(data.Lessor);
        this.royalty = ko.observable(data.Royalty);
        this.termOfLease = ko.observable(data.TermOfLease);
        this.simpleDescription = ko.observable(data.SimpleDescription);
        this.effectiveDate = ko.observable(data.EffectiveDate);
        this.filedDate = ko.observable(data.FiledDate);
        this.extension = ko.observable(data.Extension);
        this.recordingInformation = ko.observable(data.RecordingInfo);
        this.leaseMineralInterests = ko.observableArray(data.LeaseMineralInterests)
        this.notes = ko.observable(data.notes);
        this.timestamp = data.Timestamp;
       
    };

    var idName = "#" + convertRoutDiv("-");
    ko.applyBindings(leasecheckLeaseNewVM, $(idName)[0]);
    
}

var leasecheckLeaseNewVM;	//will be initialized in API request callback

/* called in the routing.js, initializes the tracts viewmodels*/
function leasecheckLeaseIndexVM(itemsList) {
    var items = idToLink(itemsList,'LeaseNo','Id');
    title = ko.observable("View Leases");

    sortByName = function() {
        items.sort(function(a, b) {
            return a.name < b.name ? -1 : 1;
        });
    };

    jumpToFirstPage = function() {
        gridViewModel.currentPageIndex(0);
    };

    gridViewModel = new ko.simpleGrid.viewModel({
        data: items,
        columns: [
            {headerText: "Lease ID", rowText: "Id"},
            //{headerText: "Lease Number", rowText:"LeaseNo"},
                    {headerText: "Lessee", rowText:"Lessee"},
                    {headerText: "Lessor", rowText:"Lessor"},
                    {headerText: "Term Of Lease", rowText:"TermOfLease"},
                    //{headerText: "Effective Date", rowText:"EffectiveDate"},
                    {headerText: "Extension", rowText:"Extension"},
                    //{headerText: "TermOfLease", rowText:"TermOfLease"}
        ],
        pageSize: 10
    });
}


/* Save Data */
function postLease(action) {
    require(["infinitegis/services"], function() {
        var leaseData = {
            Id: null,
        };
        createItem(leaseData, "Leases", function(x) {
            switch (action) {
                case "gotToNewId":
                    console.log(x)
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/lease/view/:" + x.Id);
                    });
                    break;
                case "goToList":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/lease/index/");
                    });
                    break;
                case "stay":
                    break;
                case "saveStay":
                    break;
                case "gotToNoId":
                    leasecheckLeaseCallBindings();
                    break
                case "leasecheck/lease/new":
                    leasecheckLeaseCallBindings();
                    break
                default:
                    hash(action);
            }
        });
    });
}


function putLease(action, params) {
    require(["infinitegis/services"], function() {
        var leaseData = {
            Id: params.id.toString(),
            Timestamp: leasecheckLeaseNewVM.timestamp
        
        };

        updateItem(params.id.toString(), leaseData, "Leases", function(data, textStatus, response) {
            console.log(data)
            _currPageIsDirty = false;
            noty({"text": "Lease: " + params.id + " Updated Successfully", "layout": "topRight", "type": "success"});

            //save updated token
            //localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");
            switch (action) {
                case "gotToNewId":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/lease/view/:" + data.Id);
                    });
                    break;
                case "goToList":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/lease/index");
                    });
                    break;
                case "stay":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/lease/view/:" + data.Id);
                    });
                    break;
                case "saveAndStay":
                    break
                case "gotToNoId":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/lease/new");
                    });
                    break
                default:
                    //just stay here 
            }
        });
    });
    return false;
}


/*Utility Functions*/

function leasecheckLeaseCallBindings(id) {
    var currentPage = pageRoute.page.split(".");
    var pageName = currentPage[0];
    switch (pageName)
    {
        case "index":
            //update global IsDirty logic
            _saveCurrPageFcn = null;

            loadLeases(function() {
                var idName = "#" + convertRoutDiv("-");
                ko.applyBindings(new leasecheckLeaseIndexVM(tempList), $(idName)[0]);
            });
            break;
        case "new":
    masterVM.relatedTypes.removeAll();
    masterVM.relatedItems.removeAll();
    masterVM.relatedButtons.removeAll();
            //update global IsDirty logic
            _saveCurrPageFcn = function() {

                alert("i'm saving your tract to the DB now.");
                //TODO: replace with API call
            };
            if (!id) {
                loadNewLease(function() {
                    var idName = "#" + convertRoutDiv("-");
                    ko.applyBindings(leasecheckLeaseNewVM, $(idName)[0]);
                    //newPageLoad();
                });
            } else {
                //load data from api
                require(["infinitegis/services"], function() {
                    
                    getLists("Leases/" + id.toString(), loadLeaseId);
                });
                relatedItems(id, pageRoute);
                
            }
            
            break;
        default:
    }
}


        
function getLeaseTypes(selected) {
    require(["infinitegis/services"], function() {
        getLists("leaseTypes", function(x) {
            //console.log(x)
            $.each(x, function(q, r) {
                leasecheckLeaseNewVM.leaseTypeOptions.push({id: r.Id, name: r.Name});
            });
            if (selected !== undefined)
            leasecheckLeaseNewVM.type(selected);
            $('.leaseType-select').trigger('liszt:updated');
            $('select[data-rel="chosen-leaseType"]').off('change');
            $('[data-rel="chosen-leaseType"],[rel="chosen-leaseType"]').chosen();
            $('select[data-rel="chosen-leaseType"]').on('change', function(evt, params) {
                leasecheckLeaseNewVM.type(params.selected);
            });
        });
    });
}
    
function getLeaseStatuses(selected) {
    require(["infinitegis/services"], function() {
        getLists("leaseStatuses", function(x) {
            console.log(x)
            $.each(x, function(q, r) {
                leasecheckLeaseNewVM.leaseStatusOptions.push({id: r.Id, name: r.Name});
            });
            if (selected !== undefined)
            leasecheckLeaseNewVM.leaseStatus(selected);
            $('.leaseStatus-select').trigger('liszt:updated');
            $('select[data-rel="chosen-leaseStatus"]').off('change');
            $('[data-rel="chosen-leaseStatus"],[rel="chosen-leaseStatus"]').chosen();
            $('select[data-rel="chosen-leaseStatus"]').on('change', function(evt, params) {
                leasecheckLeaseNewVM.leaseStatus(params.selected);
            });
        });
    });
}


//class="payStatus-select"  data-rel="chosen-payStatus"
function getLeasePayStatuses(selected) {
    require(["infinitegis/services"], function() {
        getLists("leasePayStatuses", function(x) {
            $.each(x, function(q, r) {
                leasecheckLeaseNewVM.payStatusOptions.push({id: r.Id, name: r.Name});
            });
            if (selected !== undefined)
            leasecheckLeaseNewVM.payStatus(selected);
            $('.payStatus-select').trigger('liszt:updated');
            $('select[data-rel="chosen-payStatus"]').off('change');
            $('[data-rel="chosen-payStatus"],[rel="chosen-payStatus"]').chosen();
            $('select[data-rel="chosen-payStatus"]').on('change', function(evt, params) {
              leasecheckLeaseNewVM.payStatus(params.selected);
            });
        });
    });
       
}


