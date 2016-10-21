/* master view model modifications for interestowner pages*/
function leasecheckRoyaltyinterestCustomizeMasterVM(params) {
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
            if (params.id)
                masterVM.commandMenuButtons.push({
                    id: "delete",
                    label: "delete",
                    value: "delete",
                    CSSClass: "btn btn-danger",
                    action: function() {
                        require(["infinitegis/services"], function() {
                            deleteItem(params.id, "Royaltyinterest");
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
        id: "royaltyinterest",
        label: "Interest Owners",
        path: "leasecheck/royaltyinterest/index",
        CSSClass: "list",
        file: "index.html",
        helpText: ""
    });
    masterVM.sideNavMenuItems.push({
        id: "newroyaltyinterest",
        label: "new",
        path: "leasecheck/royaltyinterest/new",
        CSSClass: "new",
        file: "index.html",
        helpText: ""
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
                        if ($('a#saveLeave').data('sentlink') == "leasecheck/royaltyinterest/index") {
                            hash("leasecheck/royaltyinterest/index");
                        } else {
                            leasecheckRoyaltyinterestCallBindings();
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

    //check for Royaltyinterest id in params
    var idparam = params.id ? params.id : null;
    leasecheckRoyaltyinterestCallBindings(idparam);
}

/* Royaltyinterest list */
/* load the Royaltyinterest list here */
var tempList = [];

function loadRoyaltyinterests(callback) {
    require(["infinitegis/services"], function() {
        console.log("load all Mineral Owner")
        getLists("Royaltyinterests", callback);
    });
}

/* new Royaltyinterest*/
function loadnewTract(callback) {
    leasecheckRoyaltyinterestNewVM = new function() {
        this.foo = ko.observable();
        //getTractTypes();
    };
        if (callback && callback.constructor === Function)
        callback();
}


/* LOAD EXISTING Royaltyinterest*/
function loadRoyaltyinterestId(data, apiCall) {
    console.log("put the Royaltyinterest in")
    leasecheckRoyaltyinterestNewVM = new function() {
        this.foo = ko.observable();
    //getroyaltyinterestTypes();
    };

    var idName = "#" + convertRoutDiv("-");
    ko.applyBindings(leasecheckRoyaltyinterestNewVM, $(idName)[0]);
    //newPageLoad();
}

var leasecheckRoyaltyinterestNewVM;	//will be initialized in API request callback

/* called in the routing.js, initializes the tracts viewmodels*/
function leasecheckInterestownerIndexVM(itemsList) {
console.log(itemsList)
    var items = idToLink(itemsList);
    title = ko.observable("View Royaltyinterests");

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
            {headerText: "Food ID", rowText: "fooId"},
          
        ],
        pageSize: 10
    });
}


/* Save Data */
function postData(action) {
    require(["infinitegis/services"], function() {
        console.log(leasecheckRoyaltyinterestNewVM.tractStatus())
        var theData = {
            Id: null,
            Foo: leasecheckRoyaltyinterestNewVM.foo
        };
        createItem(theData, "Royaltyinterest", function(x) {
            switch (action) {
                case "gotToNewId":
                    console.log(x)
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/royaltyinterest/view/:" + x.Id);
                    });
                    break;
                case "goToList":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/royaltyinterest/index/");
                    });
                    break;
                case "stay":
                    break;
                case "saveStay":
                    break;
                case "gotToNoId":
                    leasecheckRoyaltyinterestCallBindings();
                    break
                case "leasecheck/royaltyinterest/new":
                    leasecheckRoyaltyinterestCallBindings();
                    break
                default:
                    hash(action);
            }
        });
    });
}


function putData(action, params) {
    require(["infinitegis/services"], function() {
        console.log(leasecheckTractNewVM.tractStatus());
        var theData = {
            Id: params.id.toString(),
            RoyaltyinterestFoo: leasecheckRoyaltyinterestNewVM.foo,
            Timestamp: leasecheckRoyaltyinterestNewVM.timestamp
        };

        updateItem(params.id.toString(), theData, "Royaltyinterest", function(data, textStatus, response) {
            console.log(data)
            _currPageIsDirty = false;
            noty({"text": "royaltyinterest: " + params.id + " Updated Successfully", "layout": "topRight", "type": "success"});

            //save updated token
            //localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");
            switch (action) {
                case "gotToNewId":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/royaltyinterest/view/:" + data.Id);
                    });
                    break;
                case "goToList":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/royaltyinterest/index");
                    });
                    break;
                case "stay":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/royaltyinterest/view/:" + data.Id);
                    });
                    break;
                case "saveAndStay":
                    break
                case "gotToNoId":
                    require(["dojo/hash"], function(hash) {
                        hash("leasecheck/royaltyinterest/new");
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
function idToLink(itemList) {
    var newList = ko.observableArray();
    $.each(itemList, function(index, item) {
        if (item.Id)
        {
            var pageSplit = pageRoute.route.split("/");
            var newValue = "<a href='#" + pageSplit[1] + "/" + pageSplit[2] + "/view/:" + item.Id.toString() + "'>";
            newValue += (item.Id.toString() + "</a>");
            item.Id = newValue;

            newList.push(item);
        }
    });
    return newList;
}

function leasecheckRoyaltyinterestCallBindings(id) {
    var currentPage = pageRoute.page.split(".");
    var pageName = currentPage[0];
    switch (pageName)
    {
        case "index":
            //update global IsDirty logic
            _saveCurrPageFcn = null;

            loadRoyaltyinterests(function() {
                var idName = "#" + convertRoutDiv("-");
                ko.applyBindings(new leasecheckRoyaltyinterestIndexVM(tempList), $(idName)[0]);
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
                    ko.applyBindings(leasecheckRoyaltyinterestNewVM, $(idName)[0]);
                    newPageLoad();
                });
            } else {
                //load data from api
                require(["infinitegis/services"], function() {
                    console.log("just load 1 Royaltyinterest")
                    //console.
                    getLists("Royaltyinterests/" + id.toString(), loadTractId);
                });
                relatedItems(id, pageRoute);
            }
            break;
        default:
    }
}

function getRoyaltyinterestFoos() {
    $('.ioyaltyinterestFoo-select').trigger('liszt:updated');
    require(["infinitegis/services"], function() {
        getLists("royaltyinterestFoos", function(x) {
            console.log(x)
            $.each(x, function(q, r) {
                console.log(r.Name)
                leasecheckRoyaltyinterestNewVM.tractTypeOptions.push({id: r.Id, name: r.Name});
            });
            $('[data-rel="chosen-royaltyinterestfoos"],[rel="chosen-royaltyinterestfoos"]').chosen();
            $('select[data-rel="chosen-royaltyinterestfoos"]').on('change', function(evt, params) {
                leasecheckRoyaltyinterestsNewVM.tractType(params.selected);
            });
        });
    });
}