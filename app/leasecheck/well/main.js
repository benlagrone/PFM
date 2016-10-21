/* master view model modifications for Wells pages*/
function leasecheckWellCustomizeMasterVM(params) {
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
                        putWell("saveAndStay", params);
                    } else {
                        postWell("gotToNewId");
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
                        putWell("gotToNoId", params);
                    } else {
                        postWell("gotToNoId");
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
                            deleteItem(params.id, "Wells");
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

    params.id ? masterVM.referencePointLabel("Well ID") : masterVM.referencePointLabel("Create");
    params.id ? masterVM.referencePoint(params.id) : masterVM.referencePoint("New Well");
    masterVM.formMenuTitle("Wells");

    masterVM.contextMenuTitle("Wells");
    masterVM.currentPageLabel("Wells");
    masterVM.menuHelpText("About the well; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    masterVM.modalButtons.removeAll();
    masterVM.modalButtons.push({id: "notSaveLeave", label: "Leave Without Saving", action: function() {
            $('#myModal').on('hidden.bs.modal', function() {
                require(["dojo/hash"], function(hash) {
                    _currPageIsDirty = false;
                    console.log(params.id)
                    if (params.id) {
                        hash($('a#saveLeave').data('sentlink'));
                    } else {
                        if ($('a#saveLeave').data('sentlink') == "leasecheck/well/index") {
                            hash("leasecheck/well/index");
                        } else {
                            leasecheckWellCallBindings();
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
                putWell(masterVM.modalSentLink(), params);
            } else {
                var theLink = masterVM.modalSentLink();
                postWell(theLink);

            }
            ;
        }, CSSClass: ""});
    masterVM.modalButtons.push({id: "saveStay", label: "Save & Stay", action: function() {
            if (params.id) {
                putWell("stay", params);
            } else {
                postWell("gotToNewId");
            }
        }, CSSClass: ""});
    masterVM.modalButtons.push({id: "cancel", label: "Cancel", action: function() {
            //cancelStandard();
        }, CSSClass: ""});

    //check for well id in params
    var idparam = params.id ? params.id : null;
    leasecheckWellCallBindings(idparam);
}

/* wells list */
/* load the wells list here */
var tempList = [];

function loadWells(callback) {
    require(["infinitegis/services"], function() {
        getLists("Wells", callback);
    });
}

/* new well*/
function loadNewWell(callback) {
    leasecheckWellNewVM = new function() {
       getWellTypes();
        getWellStatuses();
        getWellPayStatuses();
        getCompanies();
        this.title = ko.observable("New Well");
        
        this.wellStatusOptions = ko.observableArray(['']);
        this.payStatusOptions = ko.observableArray(['']);
        this.wellTypeOptions = ko.observableArray(['']);
        this.companies = ko.observableArray(['']);
        this.type = ko.observable();
        this.wellStatus = ko.observable(); 
        this.payStatus = ko.observable();
        
        this.apiNumber = ko.observable();
        this.apiNumber.subscribe(setCurrPageDirty);
        this.geometry = ko.observable();
        this.geometry.subscribe(setCurrPageDirty);
        this.leaseName = ko.observable();
        this.leaseName.subscribe(setCurrPageDirty);
        this.leaseId = ko.observable();
        this.leaseId.subscribe(setCurrPageDirty);
        this.fieldName = ko.observable();
        this.fieldName.subscribe(setCurrPageDirty);
        this.initialOperator = ko.observable();
        //this.initialOperator.subscribe(setCurrPageDirty);
        this.currentOperator = ko.observable();
        //this.currentOperator.subscribe(setCurrPageDirty);
        this.paidInterest = ko.observable();
        this.paidInterest.subscribe(setCurrPageDirty);
        this.section = ko.observable();
        this.section.subscribe(setCurrPageDirty);
        this.block = ko.observable();
        this.block.subscribe(setCurrPageDirty);
        this.unitSize = ko.observable();
        this.unitSize.subscribe(setCurrPageDirty);
        this.spudDate = ko.observable();
        this.spudDate.subscribe(setCurrPageDirty);
        this.completionDate = ko.observable();
        this.completionDate.subscribe(setCurrPageDirty);
        this.firstProductionDate = ko.observable();
        this.firstProductionDate.subscribe(setCurrPageDirty);
        this.latitude = ko.observable();
        this.latitude.subscribe(setCurrPageDirty);
        this.longitude = ko.observable();
        this.longitude.subscribe(setCurrPageDirty);
        this.unitRecording = ko.observable();
        this.unitRecording.subscribe(setCurrPageDirty);
        this.notes = ko.observable();
        this.notes.subscribe(setCurrPageDirty);
        
    };
        if (callback && callback.constructor === Function)
        callback();
}


/* LOAD EXISTING well*/
function loadWellId(data, apiCall) {
    leasecheckWellNewVM = new function() {
        getWellTypes(data.TypeId);
        getWellStatuses(data.StatusId);
        getWellPayStatuses(data.PayStatusId);
        this.title = ko.observable("View Well " + data.Id);
        
        this.wellStatusOptions = ko.observableArray();
        this.payStatusOptions = ko.observableArray();
        this.wellTypeOptions = ko.observableArray();
        this.wellStatus = ko.observable(data.StatusId); 
        this.apiNumber = ko.observable(data.APINumber);
        this.geometry = ko.observable(data.Geometry);
        this.leaseName = ko.observable(data.LeaseName);
        this.leaseId = ko.observable(data.LeaseID);
        this.fieldName = ko.observable(data.FieldName);
        this.payStatus = ko.observable(data.PayStatusId);
        this.initialOperator = ko.observable(data.InitialOperatorId);
        this.currentOperator = ko.observable(data.CurrentOperatorId);
        this.paidInterest = ko.observable(data.PaidInterest);
        this.section = ko.observable(data.Section);
        this.block = ko.observable(data.Block);
        this.unitSize = ko.observable(data.UnitSize);
        this.spudDate = ko.observable(data.SpudDate);
        this.completionDate = ko.observable(data.CompletionDate);
        this.firstProductionDate = ko.observable(data.FirstProductionDate);
        this.latitude = ko.observable(data.Latitude);
        this.longitude = ko.observable(data.Longitude);
        this.unitRecording = ko.observable(data.UnitRecording);
        this.notes = ko.observable(data.Notes);
        this.type = ko.observable(data.TypeId);
        this.timestamp = data.Timestamp;
        
        this.apiNumber.subscribe(setCurrPageDirty);
        
        this.geometry.subscribe(setCurrPageDirty);
        
        this.leaseName.subscribe(setCurrPageDirty);
        
        this.leaseId.subscribe(setCurrPageDirty);
        
        this.fieldName.subscribe(setCurrPageDirty);
        
        this.initialOperator.subscribe(setCurrPageDirty);
        
        this.currentOperator.subscribe(setCurrPageDirty);
        
        this.paidInterest.subscribe(setCurrPageDirty);
        
        this.section.subscribe(setCurrPageDirty);
        
        this.block.subscribe(setCurrPageDirty);
        
        this.unitSize.subscribe(setCurrPageDirty);
        
        this.spudDate.subscribe(setCurrPageDirty);
        
        this.completionDate.subscribe(setCurrPageDirty);
        
        this.firstProductionDate.subscribe(setCurrPageDirty);
        
        this.latitude.subscribe(setCurrPageDirty);
        
        this.longitude.subscribe(setCurrPageDirty);
        
        this.unitRecording.subscribe(setCurrPageDirty);
        
        this.notes.subscribe(setCurrPageDirty);
        
    };

    var idName = "#" + convertRoutDiv("-");
    ko.applyBindings(leasecheckWellNewVM, $(idName)[0]);
    
}

var leasecheckWellNewVM;	//will be initialized in API request callback

/* called in the routing.js, initializes the wells viewmodels*/
function leasecheckWellIndexVM(itemsList) {
    var items = idToLink(itemsList,'APINumber','Id');
    title = ko.observable("View Wells");

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
            {headerText: "API Number", rowText: "Id"},
            {headerText: "Field Name", rowText: "FieldName"},
            {headerText: "Lease Name", rowText: "LeaseName"},
            {headerText: "Pay Status", rowText: "PayStatusId"},
            {headerText: "Status", rowText: "StatusId"},
            {headerText: "Type", rowText: "TypeId"}
        ],
        pageSize: 10
    });
}


/* Save Data */
function postWell(action) {
    require(["infinitegis/services"], function() {
        var wellData = {
            Id: null,
            StatusId:leasecheckWellNewVM.wellStatus,
        APINumber:leasecheckWellNewVM.apiNumber,
        Geometry:leasecheckWellNewVM.geometry,
        LeaseName:leasecheckWellNewVM.leaseName,
        LeaseID:leasecheckWellNewVM.leaseId,
        FieldName:leasecheckWellNewVM.fieldName,
        PayStatusId:leasecheckWellNewVM.payStatus,
        InitialOperatorId:leasecheckWellNewVM.initialOperator,
        PaidInterest:leasecheckWellNewVM.paidInterest,
        CurrentOperatorId:leasecheckWellNewVM.currentOperator,
        Section:leasecheckWellNewVM.section,
        Block:leasecheckWellNewVM.block,
        UnitSize:leasecheckWellNewVM.unitSize,
        SpudDate:leasecheckWellNewVM.spudDate,
        CompletionDate:leasecheckWellNewVM.completionDate,
        FirstProductionDate:leasecheckWellNewVM.firstProductionDate,
        Latitude:leasecheckWellNewVM.latitude,
        Longitude:leasecheckWellNewVM.longitude,
        UnitRecording:leasecheckWellNewVM.unitRecording,
        Notes:leasecheckWellNewVM.notes,
        TypeId:leasecheckWellNewVM.type
        };
        createItem(wellData, "Wells", function(x) {
            switch (action) {
                case "gotToNewId":
                    console.log(x)
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/well/view/:" + x.Id);
                    });
                    break;
                case "goToList":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/well/index/");
                    });
                    break;
                case "stay":
                    break;
                case "saveStay":
                    break;
                case "gotToNoId":
                    leasecheckWellCallBindings();
                    break
                case "leasecheck/well/new":
                    leasecheckWellCallBindings();
                    break
                default:
                    hash(action);
            }
        });
    });
}


function putWell(action, params) {
    require(["infinitegis/services"], function() {
        var wellData = {
            Id: params.id.toString(),
            StatusId:leasecheckWellNewVM.wellStatus,
        APINumber:leasecheckWellNewVM.apiNumber,
        Geometry:leasecheckWellNewVM.geometry,
        LeaseName:leasecheckWellNewVM.leaseName,
        LeaseID:leasecheckWellNewVM.leaseId,
        FieldName:leasecheckWellNewVM.fieldName,
        PayStatusId:leasecheckWellNewVM.payStatus,
        InitialOperatorId:leasecheckWellNewVM.initialOperator,
        PaidInterest:leasecheckWellNewVM.paidInterest,
        CurrentOperatorId:leasecheckWellNewVM.currentOperator,
        Section:leasecheckWellNewVM.section,
        Block:leasecheckWellNewVM.block,
        UnitSize:leasecheckWellNewVM.unitSize,
        SpudDate:leasecheckWellNewVM.spudDate,
        CompletionDate:leasecheckWellNewVM.completionDate,
        FirstProductionDate:leasecheckWellNewVM.firstProductionDate,
        Latitude:leasecheckWellNewVM.latitude,
        Longitude:leasecheckWellNewVM.longitude,
        UnitRecording:leasecheckWellNewVM.unitRecording,
        Notes:leasecheckWellNewVM.notes,
        TypeId:leasecheckWellNewVM.type,
            Timestamp: leasecheckWellNewVM.timestamp
        
        };

        updateItem(params.id.toString(), wellData, "Wells", function(data, textStatus, response) {
            console.log(data)
            _currPageIsDirty = false;
            noty({"text": "Well: " + params.id + " Updated Successfully", "layout": "topRight", "type": "success"});

            //save updated token
            //localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");
            switch (action) {
                case "gotToNewId":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/well/view/:" + data.Id);
                    });
                    break;
                case "goToList":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/well/index");
                    });
                    break;
                case "stay":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/well/view/:" + data.Id);
                    });
                    break;
                case "saveAndStay":
                    break
                case "gotToNoId":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/well/new");
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

function leasecheckWellCallBindings(id) {
    var currentPage = pageRoute.page.split(".");
    var pageName = currentPage[0];
    switch (pageName)
    {
        case "index":
            //update global IsDirty logic
            _saveCurrPageFcn = null;

            loadWells(function() {
                var idName = "#" + convertRoutDiv("-");
                ko.applyBindings(new leasecheckWellIndexVM(tempList), $(idName)[0]);
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
                loadNewWell(function() {
                    var idName = "#" + convertRoutDiv("-");
                    ko.applyBindings(leasecheckWellNewVM, $(idName)[0]);
                    //newPageLoad();
                });
            } else {
                //load data from api
                require(["infinitegis/services"], function() {
                    
                    getLists("Wells/" + id.toString(), loadWellId);
                });
                relatedItems(id, pageRoute);
                
            }
            
            break;
        default:
    }
}

        //getWellStatuses(data.WellStatusId);
        //getWellPayStatuses(data.WellPayStatudId);
        //getWellStatuses(data.WellStatusId);
        //
        //this.wellStatusOptions = ko.observableArray();
        //this.payStatusOptions = ko.observableArray();
        //this.wellTypeOptions = ko.observableArray();
        //
        //this.wellStatus = ko.observable(data.WellStatusId);
        //this.status = ko.observable(data.StatusId);
        //this.wellPayStatus = ko.observable(data.WellPayStatudId);
        //
 

        
function getWellTypes(selected) {
    require(["infinitegis/services"], function() {
        getLists("wellTypes", function(x) {
            //console.log(x)
            $.each(x, function(q, r) {
                leasecheckWellNewVM.wellTypeOptions.push({id: r.Id, name: r.Name});
            });
            if (selected !== undefined)
            leasecheckWellNewVM.type(selected);
            $('.wellType-select').trigger('liszt:updated');
            $('select[data-rel="chosen-wellType"]').off('change');
            $('[data-rel="chosen-wellType"],[rel="chosen-wellType"]').chosen();
            $('select[data-rel="chosen-wellType"]').on('change', function(evt, params) {
                leasecheckWellNewVM.type(params.selected);
            });
        });
    });
}
    
function getWellStatuses(selected) {
    require(["infinitegis/services"], function() {
        getLists("wellStatuses", function(x) {
            console.log(x)
            $.each(x, function(q, r) {
                leasecheckWellNewVM.wellStatusOptions.push({id: r.Id, name: r.Name});
            });
            if (selected !== undefined)
            leasecheckWellNewVM.wellStatus(selected);
            $('.wellStatus-select').trigger('liszt:updated');
            $('select[data-rel="chosen-wellStatus"]').off('change');
            $('[data-rel="chosen-wellStatus"],[rel="chosen-wellStatus"]').chosen();
            $('select[data-rel="chosen-wellStatus"]').on('change', function(evt, params) {
                leasecheckWellNewVM.wellStatus(params.selected);
            });
        });
    });
}


//class="payStatus-select"  data-rel="chosen-payStatus"
function getWellPayStatuses(selected) {
    require(["infinitegis/services"], function() {
        getLists("wellPayStatuses", function(x) {
            $.each(x, function(q, r) {
                leasecheckWellNewVM.payStatusOptions.push({id: r.Id, name: r.Name});
            });
            if (selected !== undefined)
            leasecheckWellNewVM.payStatus(selected);
            $('.payStatus-select').trigger('liszt:updated');
            $('select[data-rel="chosen-payStatus"]').off('change');
            $('[data-rel="chosen-payStatus"],[rel="chosen-payStatus"]').chosen();
            $('select[data-rel="chosen-payStatus"]').on('change', function(evt, params) {
              leasecheckWellNewVM.payStatus(params.selected);
            });
        });
    });
       
}

function getCompanies(selected,source) {
    require(["infinitegis/services"], function() {
        getLists("Companies", function(x) {
            $.each(x, function(q, r) {
                leasecheckWellNewVM.companies.push({id: r.Id, name: r.Name});
            });
            //if (selected !== undefined)
            //leasecheckWellNewVM.companies(selected);
            $('.currentoperator-select').trigger('liszt:updated');
            $('select[data-rel="chosen-currentoperator"]').off('change');
            $('[data-rel="chosen-currentoperator"],[rel="chosen-currentoperator"]').chosen();
            $('select[data-rel="chosen-currentoperator"]').on('change', function(evt, params) {
              leasecheckWellNewVM.currentOperator(params.selected);
            });
            
            $('.initialoperator-select').trigger('liszt:updated');
            $('select[data-rel="chosen-initialoperator"]').off('change');
            $('[data-rel="chosen-initialoperator"],[rel="chosen-initialoperator"]').chosen();
            $('select[data-rel="chosen-initialoperator"]').on('change', function(evt, params) {
              leasecheckWellNewVM.initialOperator(params.selected);
            });
        });
    });
       
}
