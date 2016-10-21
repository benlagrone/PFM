/* master view model modifications for tracts pages*/
function leasecheckTractCustomizeMasterVM(params) {
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
                        putTract("saveAndStay", params);
                    } else {
                        postTract("gotToNewId");
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
                        putTract("gotToNoId", params);
                    } else {
                        postTract("gotToNoId");
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
                            deleteItem(params.id, "Tracts");
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
    
    masterVM.relatedTypes.removeAll();
    masterVM.modalTitle("Confirm Save");
    masterVM.modalHTML("You have not yet saved what you entered on this page.  Do you want to save before you leave?");

    params.id ? masterVM.referencePointLabel("Tract ID") : masterVM.referencePointLabel("Create");
    params.id ? masterVM.referencePoint(params.id) : masterVM.referencePoint("New Tract");
    masterVM.formMenuTitle("Tracts");

    masterVM.contextMenuTitle("Tracts");
    masterVM.currentPageLabel("tracts");
    masterVM.menuHelpText("About the tract; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    masterVM.modalButtons.removeAll();
    masterVM.modalButtons.push({id: "SaveLeave", label: "Leave Without Saving", action: function() {
            $('#myModal').on('hidden.bs.modal', function() {
                require(["dojo/hash"], function(hash) {
                    _currPageIsDirty = false;
                    window.alert(params.id)
                    if (params.id) {
                        hash($('a#saveLeave').data('sentlink'));
                    } else {
                        if ($('a#saveLeave').data('sentlink') == "leasecheck/tract/index") {
                            hash("leasecheck/tract/index");
                        } else {
                            leasecheckTractCallBindings();
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
                putTract(masterVM.modalSentLink(), params);
            } else {
                var theLink = masterVM.modalSentLink();
                postTract(theLink);

            }
            ;
        }, CSSClass: ""});
    masterVM.modalButtons.push({id: "saveStay", label: "Save & Stay", action: function() {
            if (params.id) {
                putTract("stay", params);
            } else {
                postTract("gotToNewId");
            }
        }, CSSClass: ""});
    masterVM.modalButtons.push({id: "cancel", label: "Cancel", action: function() {
            //cancelStandard();
        }, CSSClass: ""});

    //check for tract id in params
    var idparam = params.id ? params.id : null;
    leasecheckTractCallBindings(idparam);
}


/* tracts list */
/* load the tracts list here */
var tempList = [];

function loadTracts(callback) {
    require(["infinitegis/services"], function() {
        getLists("Tracts", callback);
    });
}

/* new tract*/
function loadnewTract(callback) {
    leasecheckTractNewVM = new function() {
        getTractStatuses();
        getTractTypes();
        this.formLocked = ko.observable(false);
        this.statesOptions = ko.observableArray([""]);
        this.countiesOptions = ko.observableArray();
        this.tractTypeOptions = ko.observableArray();
        this.statusOptions = ko.observableArray();
        this.state = ko.observable("");
        //this.state.subscribe(setCurrPageDirty);
        this.county = ko.observable("");
        //this.county.subscribe(setCurrPageDirty);
        this.tractIdConstructMethod = ko.observable("useSectionTownshipRange");
        //this.tractIdConstructMethod.subscribe(setCurrPageDirty);
        this.section = ko.observable();
        this.section.subscribe(setCurrPageDirty);
        this.township = ko.observable().extend({numeric: 0});
        this.township.subscribe(setCurrPageDirty);
        this.townshipDirection = ko.observable();
        this.townshipDirection.subscribe(setCurrPageDirty);
        this.range = ko.observable('').extend({numeric: 0});
        this.range.subscribe(setCurrPageDirty);
        this.rangeDirection = ko.observable();
        this.rangeDirection.subscribe(setCurrPageDirty);
        this.title = ko.observable("New Tract");
        this.tractid = ko.observable();
        //this.tractid.subscribe(setCurrPageDirty);
        this.tractNumberAppend = ko.observable();
        this.tractNumberAppend.subscribe(setCurrPageDirty);
        this.tabstract = ko.observable();
        //this.tabstract.subscribe(setCurrPageDirty);
        this.section = ko.observable().extend({numeric: 0});
        this.section.subscribe(setCurrPageDirty);
        this.tractStatus = ko.observable("");
        //this.tractStatus.subscribe(setCurrPageDirty);
        this.tractType = ko.observable("");
        //this.tractType.subscribe(setCurrPageDirty);
        this.grossacreage = ko.observable().extend({numeric: 0});
        this.grossacreage.subscribe(setCurrPageDirty);
        this.survey = ko.observable("foo");
        this.survey.subscribe(setCurrPageDirty);
        this.legaldescription = ko.observable("foo");
        this.legaldescription.subscribe(setCurrPageDirty);
        this.tractNumberByAbstract = ko.computed(function() {
            var formField = (this.state() === "" ? "" : this.state()) + (this.county() === "" ? "" : "-" + this.county()) +
                    (this.tabstract() === undefined ? "" : "-A" + this.tabstract()) + (this.tractNumberAppend() === undefined ? "" : "-" + this.tractNumberAppend());
            if (formField === "")
                formField = "Use Abstract";
            return formField;
        }, this);
        this.tractNumberBySectionTownshipRange = ko.computed(function() {
            var formField = (this.state() === "" ? "" : this.state()) + (this.county() === "" ? "" : "-" + padNumbers(this.county(), 3)) +
                    (this.section() === undefined ? "" : "-S" + padNumbers(this.section(), 2)) + (this.township() === undefined ? "" : ".T" + padNumbers(this.township(), 2)) +
                    (this.townshipDirection() === undefined ? "" : this.townshipDirection().charAt(0)) + (this.range() === undefined ? "" : ".R" + padNumbers(this.range(), 2)) +
                    (this.rangeDirection() === undefined ? "" : this.rangeDirection().charAt(0)) + (this.tractNumberAppend() === undefined ? "" : "-" + this.tractNumberAppend());
            if (formField === "")
                formField = "Use Section Township Range";
            return formField;
        }, this);
        this.createTractNumber = ko.computed(function() {
            var formField = (this.tractIdConstructMethod() === "useSectionTownshipRange" ? this.tractNumberBySectionTownshipRange() : this.tractNumberByAbstract());
            this.tractIdConstructMethod() === "useSectionTownshipRange" ? highlightSection() : highlightAbstract();
            return formField;
        }, this);
    };
    
    //leasecheckTractNewVM.tractTypeOptions.removeAll();
    //leasecheckTractNewVM.statusOptions.removeAll();
    //leasecheckTractNewVM.tractTypeOptions.push('')
        
    function highlightSection() {
        $('.useEither').addClass('highlight');
        $('.useSectionTownshipRange').addClass('highlight');
        $('.useAbstract').removeClass('highlight');
    }
    ;
    function highlightAbstract() {
        $('.useEither').addClass('highlight');
        $('.useSectionTownshipRange').removeClass('highlight');
        $('.useAbstract').addClass('highlight');
    }


    if (callback && callback.constructor === Function)
        callback();
}

/* LOAD EXISTING TRACT*/
function loadTractId(data, apiCall) {
    leasecheckTractNewVM = new function() {
    getTractStatuses(data.TractStatusId);
    getTractTypes(data.TractTypeId);
        this.formLocked = ko.observable(true);
        this.statesOptions = ko.observableArray([""]);
        this.countiesOptions = ko.observableArray();
        this.tractTypeOptions = ko.observableArray([]);
        this.statusOptions = ko.observableArray([]);
        this.state = ko.observable("");
        //this.state.subscribe(setCurrPageDirty);
        this.county = ko.observable("");
        //this.county.subscribe(setCurrPageDirty);
        this.tractNumberAppend = ko.observable();
        this.tractNumberAppend.subscribe(setCurrPageDirty);
        this.title = ko.observable("View Tract " + data.Id.toString());
        this.tractIdConstructMethod = ko.observable("useSectionTownshipRange");
        //this.tractIdConstructMethod.subscribe(setCurrPageDirty);
        this.tractid = ko.observable(data.Id);
        //this.tractid.subscribe(setCurrPageDirty);
        this.tabstract = ko.observable(data.Abstract);
        //this.tabstract.subscribe(setCurrPageDirty);
        this.township = ko.observable(data.Township).extend({numeric: 0});
        this.township.subscribe(setCurrPageDirty);
        this.townshipDirection = ko.observable(data.TownshipDirection).extend({required: ""});
        this.townshipDirection.subscribe(setCurrPageDirty);
        this.section = ko.observable(data.Section);
        this.section.subscribe(setCurrPageDirty);
        this.range = ko.observable(data.Range);
        this.range.subscribe(setCurrPageDirty);
        this.rangeDirection = ko.observable(data.RangeDirection);
        this.rangeDirection.subscribe(setCurrPageDirty);
        this.tractStatus = ko.observable(data.TractStatusId);
        //this.tractStatus.subscribe(setCurrPageDirty);
        this.tractType = ko.observable(data.TractTypeId);
        //this.tractType.subscribe(setCurrPageDirty);
        this.grossacreage = ko.observable(data.GrossAcres);
        this.grossacreage.subscribe(setCurrPageDirty);
        this.survey = ko.observable(data.SurveyName);
        this.survey.subscribe(setCurrPageDirty);
        this.legaldescription = ko.observable(data.LegalDescription);
        this.legaldescription.subscribe(setCurrPageDirty);
        this.createTractNumber = ko.observable(data.TractNumber);
        this.timestamp = data.Timestamp;
    };

    //leasecheckTractNewVM.tractTypeOptions.removeAll();
    //leasecheckTractNewVM.statusOptions.removeAll();
    
    var idName = "#" + convertRoutDiv("-");
    ko.applyBindings(leasecheckTractNewVM, $(idName)[0]);
    newPageLoad();
}

var leasecheckTractNewVM;	//will be initialized in API request callback

/* called in the routing.js, initializes the tracts viewmodels*/
function leasecheckTractIndexVM(itemsList) {

    var items = idToLink(itemsList,'TractNumber','Id');
    title = ko.observable("View Tracts");

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
            {headerText: "Tract Id", rowText: "Id"},
            {headerText: "Gross Acres", rowText: "GrossAcres"},
            //{headerText: "Legal Desc.", rowText: "LegalDescription"},
            {headerText: "Survey", rowText: "SurveyName"},
            //{headerText: "Tract Type", rowText: "TractType"},
            //{headerText: "Township", rowText: "township"},
            //{headerText: "Township Direction", rowText: "townshipdirection"},
            //{headerText: "section", rowText: "section"},
            //{headerText: "range", rowText: "range"},
            //{headerText: "rangeDirection", rowText: "rangeDirection"},
            //{headerText: "tractnumber", rowText: "tractnumber"},
            //{headerText: "status", rowText: "status"},
            //{headerText: "producing", rowText: "producing"},
            //{headerText: "grossacreage", rowText: "grossacreage"},
            //{headerText: "survey", rowText: "survey"},
            //{headerText: "flbnumber", rowText: "flbnumber"},
            //{headerText: "notes", rowText: "notes"}
        ],
        pageSize: 10
    });
}

/* Save Data */
function postTract(action) {
    require(["infinitegis/services"], function() {
        var tractData = {
            Id: null,
            TractNumber: leasecheckTractNewVM.createTractNumber,
            TractType: 1,
            GrossAcres: leasecheckTractNewVM.grossacreage,
            LegalDescription: leasecheckTractNewVM.legaldescription,
            Section: leasecheckTractNewVM.section,
            SurveyName: leasecheckTractNewVM.survey,
            TractStatusId: leasecheckTractNewVM.tractStatus,
            TractTypeId: leasecheckTractNewVM.tractType,
            Timestamp: leasecheckTractNewVM.timestamp
            //Abstract: leasecheckTractNewVM.tabstract,
            //Range: leasecheckTractNewVM.range,
            //RangeDir: leasecheckTractNewVM.rangeDirection,
            //Township: leasecheckTractNewVM.township,
            //TownshipDirection: leasecheckTractNewVM.townshipDirection,
                    //Timestamp: null
        };
        createItem(tractData, "Tracts", function(x) {
            switch (action) {
                case "gotToNewId":
                    console.log(x)
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/tract/view/:" + x.Id);
                    });
                    break;
                case "goToList":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/tract/index/");
                    });
                    break;
                case "stay":
                    break;
                case "saveStay":
                    break;
                case "gotToNoId":
                    leasecheckTractCallBindings();
                    break
                case "leasecheck/tract/new":
                    leasecheckTractCallBindings();
                    break
                default:
                    hash(action);
            }
        });
    });
}

function putTract(action, params) {
    require(["infinitegis/services"], function() {
        var tractData = {
            Id: params.id.toString(),
            TractNumber: leasecheckTractNewVM.createTractNumber,
            GrossAcres: leasecheckTractNewVM.grossacreage,
            LegalDescription: leasecheckTractNewVM.legaldescription,
            Section: leasecheckTractNewVM.section,
            SurveyName: leasecheckTractNewVM.survey,
            TractStatusId: leasecheckTractNewVM.tractStatus,
            TractTypeId: leasecheckTractNewVM.tractType,
            Timestamp: leasecheckTractNewVM.timestamp
            //Abstract: leasecheckTractNewVM.tabstract,
            //Range: leasecheckTractNewVM.range,
            //RangeDir: leasecheckTractNewVM.rangeDirection,
            //Township: leasecheckTractNewVM.township,
            //TownshipDirection: leasecheckTractNewVM.townshipDirection,
            
            
        };

        updateItem(params.id.toString(), tractData, "Tracts", function(data, textStatus, response) {
            console.log(data)
            _currPageIsDirty = false;
            noty({"text": "Tract: " + params.id + " Updated Successfully", "layout": "topRight", "type": "success"});

            //save updated token
            //localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");
            switch (action) {
                case "gotToNewId":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/tract/view/:" + data.Id);
                    });
                    break;
                case "goToList":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/tract/index");
                    });
                    break;
                case "stay":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/tract/view/:" + data.Id);
                    });
                    break;
                case "saveAndStay":
                    break
                case "gotToNoId":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/tract/new");
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

function leasecheckTractCallBindings(id) {
    var currentPage = pageRoute.page.split(".");
    var pageName = currentPage[0];
    switch (pageName)
    {
        case "index":
            //update global IsDirty logic
            _saveCurrPageFcn = null;

            loadTracts(function() {
                var idName = "#" + convertRoutDiv("-");
                ko.applyBindings(new leasecheckTractIndexVM(tempList), $(idName)[0]);
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
                loadnewTract(function() {
                    var idName = "#" + convertRoutDiv("-");
                    ko.applyBindings(leasecheckTractNewVM, $(idName)[0]);
                    newPageLoad();
                });
            } else {
                //load data from api
                require(["infinitegis/services"], function() {
                    //console.
                    getLists("Tracts/" + id.toString(), loadTractId);
                });
                relatedItems(id, pageRoute);
            }
            break;
        default:
    }
}

//stuff to do when new.html loads
function newPageLoad() {
    getStateList();
    clearSelectBindings();
    //$('[data-rel="chosen-tracttype"],[rel="chosen-tracttype"]').chosen();

}

function getTractTypes(selected) {
    require(["infinitegis/services"], function() {
        getLists("tracttypes", function(x) {
            if (selected === undefined)
                leasecheckTractNewVM.tractTypeOptions.push({id: '', name: ''});
            $.each(x, function(q, r) {
                leasecheckTractNewVM.tractTypeOptions.push({id: r.Id, name: r.Name});
            });
            if (selected !== undefined)
                leasecheckTractNewVM.tractType(selected);
            $('.tracttype-select').trigger('liszt:updated');
            $('select[data-rel="chosen-tracttype"]').off('change');
            $('[data-rel="chosen-tracttype"],[rel="chosen-tracttype"]').chosen();
            $('select[data-rel="chosen-tracttype"]').on('change', function(evt, params) {
                leasecheckTractNewVM.tractType(parseInt(params.selected));
            });
        });
    });
}

function getTractStatuses(selected) {
    require(["infinitegis/services"], function() {
        getLists("tractstatuses", function(x) {
            if (selected === undefined)
                leasecheckTractNewVM.statusOptions.push({id: '', name: ''});
            $.each(x, function(l, m) {
                leasecheckTractNewVM.statusOptions.push({id: m.Id, name: m.Name});
            });
            if (selected !== undefined)
                leasecheckTractNewVM.tractStatus(selected);
            $('.tractstatus-select').trigger('liszt:updated');
            $('select[data-rel="chosen-tractstatus"]').off('change');
            $('[data-rel="chosen-tractstatus"],[rel="chosen-tractstatus"]').chosen();
            $('select[data-rel="chosen-tractstatus"]').on('change', function(evt, params) {
                leasecheckTractNewVM.tractStatus(parseInt(params.selected));
            });
        });
    });
}

function getStateList() {
    this.state = ko.observable("");
    $('.counties-select').trigger('liszt:updated');
    $('.states-select').trigger('liszt:updated');
    require(["infinitegis/services"], function() {
        getLists("States", function(x) {
            $.each(x, function(l, m) {
                leasecheckTractNewVM.statesOptions.push({id: m.Id, abbreviatedName: m.AbbreviatedName, fullName: m.FullName});
            });

            $('.states-select').trigger('liszt:updated');
            $('[data-rel="chosen-state"],[rel="chosen-state"]').chosen();
            $('[data-rel="chosen-county"],[rel="chosen-county"]').chosen();
        });
    });
}

function getCountiesList(state) {
    leasecheckTractNewVM.county("");
    require(["infinitegis/services"], function() {
        getLists("States/" + state, function(x) {

            leasecheckTractNewVM.countiesOptions.removeAll();
            $.each(x.Counties, function(y, w) {
                leasecheckTractNewVM.countiesOptions.push({id: w.Id, Name: w.Name, FIPSCode: w.FIPSCode});
            });
            $('.counties-select').trigger('liszt:updated');
        });
    });
}

function clearCountiesStates() {
    leasecheckTractNewVM.statesOptions.removeAll();
    leasecheckTractNewVM.countiesOptions.removeAll();
    leasecheckTractNewVM.tractTypeOptions.removeAll();
    leasecheckTractNewVM.statusOptions.removeAll();
    $('.states-select').trigger('liszt:updated');
    $('.counties-select').trigger('liszt:updated');
    //getStateList();
}

//clear the listener bindings from the select
function clearSelectBindings() {
    //this is such a usefull line of code I hate to delete it
    //console.log($('[data-rel="chosen-state"],[rel="chosen-state"]').data("events"));
    //remove the listener from state
    $('select[data-rel="chosen-state"]').off('change');
    $('select[data-rel="chosen-state"]').on('change', function(evt, params) {

        var tempParam = params.selected;
        var splitParams = tempParam.split(":")
        leasecheckTractNewVM.state(splitParams[1]);
        getCountiesList(splitParams[0]);
    });
    //remove the listener from county
    $('select[data-rel="chosen-county"]').off('change');
    $('select[data-rel="chosen-county"]').on('change', function(evt, params) {
        leasecheckTractNewVM.county(params.selected);
    });
}
