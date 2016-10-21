/* master view model modifications for interestowner pages*/
function leasecheckInterestownerCustomizeMasterVM(params) {
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
                        putData("saveAndStay", params);
                    } else {
                        postData("gotToNewId");
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
                        putData("gotToNoId", params);
                    } else {
                        postData("gotToNoId");
                    }
                }
            });
            masterVM.commandMenuButtons.push({
                id: "addMI",
                label: "Add Mineral Interest",
                value: "addMI",
                CSSClass: "btn btn-primary",
                action: function() {
                    //add a MI
                }
            });
            masterVM.commandMenuButtons.push({
                id: "addRI",
                label: "Add Royalty Interest",
                value: "addRI",
                CSSClass: "btn btn-primary",
                action: function() {
                    //add a RI
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
                            deleteItem(params.id, "Interestowner");
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
        id: "interestowner",
        label: "Interest Owners",
        path: "leasecheck/interestowner/index",
        CSSClass: "list",
        file: "index.html",
        helpText: ""
    });
    masterVM.sideNavMenuItems.push({
        id: "newinterestowner",
        label: "new",
        path: "leasecheck/interestowner/new",
        CSSClass: "new",
        file: "index.html",
        helpText: ""
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

    params.id ? masterVM.referencePointLabel("Interest Owner ID") : masterVM.referencePointLabel("Create");
    params.id ? masterVM.referencePoint(params.id) : masterVM.referencePoint("New Interest Owner");
    masterVM.formMenuTitle("Interest Owner");

    masterVM.contextMenuTitle("Interest Owner");
    masterVM.currentPageLabel("Interest Owner");
    masterVM.menuHelpText("About the Interest Owner; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    masterVM.modalButtons.removeAll();
    masterVM.modalButtons.push({id: "notSaveLeave", label: "Leave Without Saving", action: function() {
            $('#myModal').on('hidden.bs.modal', function() {
                require(["dojo/hash"], function(hash) {
                    _currPageIsDirty = false;
                    if (params.id) {
                        hash($('a#saveLeave').data('sentlink'));
                    } else {
                        if ($('a#saveLeave').data('sentlink') == "leasecheck/interestowner/index") {
                            hash("leasecheck/interestowner/index");
                        } else {
                            leasecheckInterestownerCallBindings();
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
                putData(masterVM.modalSentLink(), params);
            } else {
                var theLink = masterVM.modalSentLink();
                postData(theLink);

            }
            ;
        }, CSSClass: ""});
    masterVM.modalButtons.push({id: "saveStay", label: "Save & Stay", action: function() {
            if (params.id) {
                putData("stay", params);
            } else {
                postData("gotToNewId");
            }
        }, CSSClass: ""});
    masterVM.modalButtons.push({id: "cancel", label: "Cancel", action: function() {
            //cancelStandard();
        }, CSSClass: ""});

    //check for interestowner id in params
    var idparam = params.id ? params.id : null;
    leasecheckInterestownerCallBindings(idparam);
}

/* interestowner list */
/* load the interestowner list here */
var tempList = [];

function loadInterestowners(callback) {
    require(["infinitegis/services"], function() {
        getLists("Interestowners", callback);
    });
}

/* new interestowner*/
function loadnewInterestowner(callback) {
    leasecheckInterestownerNewVM = new function() {
        getMineralownerOptions();
        this.title = ko.observable("New Interest Owner");
        this.mineralownerOptions = ko.observableArray(['']);
        this.mineralOwner = ko.observable();
        this.executiveRights = ko.observable();
        this.rightToBonus = ko.observable();
        this.grossAcreage = ko.observable();
        this.netMineralAcres = ko.observable();
        this.notes = ko.observable();
        //getTractTypes();
    };
    if (callback && callback.constructor === Function)
        callback();
}


/* LOAD EXISTING interestowner*/
function loadInterestownerId(data, apiCall) {
    leasecheckInterestownerNewVM = new function() {
        getMineralownerOptions();
        this.title = ko.observable("View Interest Owner "+data.Id);
        
        this.mineralownerOptions = ko.observableArray(['']);
        
        this.mineralOwner = ko.observable();
        
        //this.executiveRights = ko.observable();
        //this.rightToBonus = ko.observable();
        //this.grossAcreage = ko.observable();
        //this.netMineralAcres = ko.observable();
        this.company = ko.observable(data.Company);
        this.id = ko.observable(data.Id);
        this.mineralInterests = ko.observableArray(data.MineralInterests);
        this.person = ko.observable(data.Person);
        this.royaltyInterests = ko.observableArray(data.RoyaltyInterests);
        this.type = ko.observable(data.Type);
        console.log(data.Company);
        this.notes = ko.observable();
        
        if (this.type === "Company"){};
    };

    var idName = "#" + convertRoutDiv("-");
    ko.applyBindings(leasecheckInterestownerNewVM, $(idName)[0]);
    //newPageLoad();
}

var leasecheckInterestownerNewVM;	//will be initialized in API request callback

/* called in the routing.js, initializes the tracts viewmodels*/
function leasecheckInterestownerIndexVM(itemsList) {
    console.log(itemsList)
    var items = idToLinkInner(itemsList);
    title = ko.observable("View Interest Owners");

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
            {headerText: "Id", rowText: "Id"},
            {headerText: "Name", rowText: "name"},
            {headerText: "Type", rowText: "Type"},
            {headerText: "Contact", rowText: "contact"},
        ],
        pageSize: 10
    });
}


/* Save Data */
function postData(action) {
    require(["infinitegis/services"], function() {
        var theData = {
            Id: null,
            Foo: leasecheckInterestownerNewVM.foo
        };
        createItem(theData, "Interestowner", function(x) {
            switch (action) {
                case "gotToNewId":
                    console.log(x)
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/interestowner/view/:" + x.Id);
                    });
                    break;
                case "goToList":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/interestowner/index/");
                    });
                    break;
                case "stay":
                    break;
                case "saveStay":
                    break;
                case "gotToNoId":
                    leasecheckInterestownerCallBindings();
                    break
                case "leasecheck/interestowner/new":
                    leasecheckInterestownerCallBindings();
                    break
                default:
                    hash(action);
            }
        });
    });
}


function putData(action, params) {
    require(["infinitegis/services"], function() {
        var theData = {
            Id: params.id.toString(),
            InterestownerFoo: leasecheckInterestownerNewVM.foo,
            Timestamp: leasecheckInterestownerNewVM.timestamp
        };

        updateItem(params.id.toString(), theData, "Interestowner", function(data, textStatus, response) {
            console.log(data)
            _currPageIsDirty = false;
            noty({"text": "interestowner: " + params.id + " Updated Successfully", "layout": "topRight", "type": "success"});

            //save updated token
            //localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");
            switch (action) {
                case "gotToNewId":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/interestowner/view/:" + data.Id);
                    });
                    break;
                case "goToList":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/interestowner/index");
                    });
                    break;
                case "stay":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/interestowner/view/:" + data.Id);
                    });
                    break;
                case "saveAndStay":
                    break
                case "gotToNoId":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/interestowner/new");
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

/* rewrite the list for the simple grid to link to view page */
function idToLinkInner(itemList) {
    var newList = ko.observableArray();
    $.each(itemList, function(index, item) {
        if (item.Id)
        {
            var pageSplit = pageRoute.route.split("/");

            if (item.Type === "Person") {
                item.name = "<a href='#" + pageSplit[1] + "/" + pageSplit[2] + "/view/:" + item.Id.toString() + "'>" + item.Person.Name.toString() + "</a>";
                item.contact = "<ul>";
                if (item.Person.PrimaryPhone != null)
                    item.contact += "<li>phone: " + item.Person.PrimaryPhone + "</li>";
                if (item.Person.PrimaryEmail != null)
                    item.contact += "<li>email: " + item.Person.PrimaryEmail + "</li></ul>";
            } else if (item.Type === "Company") {
                item.name = "<a href='#" + pageSplit[1] + "/" + pageSplit[2] + "/view/:" + item.Id.toString() + "'>" + item.Company.Name.toString() + "</a>";
                item.contact = "<ul>";
                if (item.Company.PrimaryContact!=null&&item.Company.PrimaryContactPhone!=null&& item.Company.PrimaryContactEmail != null)
                item.contact += "<li><ul><li>Primary Contact: " + item.Company.PrimaryContact;
                if (item.Company.PrimaryContactPhone != null && item.Company.PrimaryContactPhone != null && item.Company.PrimaryContactEmail != null)
                    item.contact += "<i class='toggleGridContact halflings-icon chevron-down toggleNext'></i></li><li class='hidden'><ul>";
                if (item.Company.PrimaryContactPhone != null)
                    item.contact += "<li>phone: " + item.Company.PrimaryContactPhone + "</li>";
                if (item.Company.PrimaryContactEmail != null)
                    item.contact += "<li>email: " + item.Company.PrimaryContactEmail + "</li>";
                if (item.Company.PrimaryContactPhone != null && item.Company.PrimaryContactEmail != null)
                    item.contact += "</ul></li>";
                if (item.Company.PrimaryContact!=null&&item.Company.PrimaryContactPhone!=null&& item.Company.PrimaryContactEmail != null)
                item.contact += "</li></ul>";

                item.contact += "<li><ul><li>Address: " + item.Company.Address1 + "</li>";
                if (item.Company.Address2 != null)
                    item.contact += "<li>" + item.Company.Address2 + "</li>";
                item.contact += "<li>" + item.Company.City + ", " + item.Company.State + ", " + item.Company.Zip + "</li></li></ul>";
                item.contact += "</ul>";
            }
            item.Id = "<a href='#" + pageSplit[1] + "/" + pageSplit[2] + "/view/:" + item.Id.toString() + "'>" + item.Id.toString() + "</a>";
            newList.push(item);
        }

    });
    return newList;
}


function leasecheckInterestownerCallBindings(id) {
    var currentPage = pageRoute.page.split(".");
    var pageName = currentPage[0];
    switch (pageName)
    {
        case "index":
            //update global IsDirty logic
            _saveCurrPageFcn = null;

            loadInterestowners(function() {
                var idName = "#" + convertRoutDiv("-");
                ko.applyBindings(new leasecheckInterestownerIndexVM(tempList), $(idName)[0]);

            });
            break;
        case "new":
            masterVM.relatedTypes.removeAll();
            masterVM.relatedItems.removeAll();
            masterVM.relatedButtons.removeAll();
            //update global IsDirty logic
            _saveCurrPageFcn = function() {

                alert("i'm saving your mineral owner to the DB now.");
                //TODO: replace with API call
            };
            if (!id) {
                loadnewInterestowner(function() {
                    var idName = "#" + convertRoutDiv("-");
                    ko.applyBindings(leasecheckInterestownerNewVM, $(idName)[0]);
                    //newPageLoad();
                });
            } else {
                //load data from api
                require(["infinitegis/services"], function() {
                    //console.
                    getLists("Interestowners/" + id.toString(), loadInterestownerId);
                });
                relatedItems(id, pageRoute);
            }
            break;
        default:
    }
}

function getMineralownerOptions() {
    $('.mineralowner-select').trigger('liszt:updated');
    //require(["infinitegis/services"], function() {
        //getLists("interestownerFoos", function(x) {
            //console.log(x)
            //$.each(x, function(q, r) {
               // leasecheckInterestownerNewVM.tractTypeOptions.push({id: r.Id, name: r.Name});
            //});
            $('[data-rel="chosen-mineralowner"],[rel="chosen-mineralowner"]').chosen();
            $('select[data-rel="chosen-mineralowner"]').on('change', function(evt, params) {
                leasecheckInterestownersNewVM.tractType(params.selected);
            });
        //});
    //});
}