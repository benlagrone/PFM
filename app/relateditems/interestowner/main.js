

/* Interestowners list */
/* load the Interestowners list into here */
var tempList = [];

//uses a service to GET the list of related items
function loadRelated(apiCall, callback) {
    require(["infinitegis/services"], function() {
        getLists(apiCall, callback);
    });
}

function leasecheckInterestownerRelatedItemsVM(type) {
    masterVM.relatedTypes.push({id: "wells", label: "Wells", count: 12, action: function() {console.log("getWellsdata")}});
    masterVM.relatedTypes.push({id: "interestowners", label: "Interest Owners", count: 12, action: function() {console.log("getMOdata")}});
    masterVM.relatedTypes.push({id: "leases", label: "Leases", count: 12, action: function() {console.log("getMOdata")}});

    var relatedArray = [
        {id: "Interestowners", label: "Interestowners"},
        //{id: "Wells", label: "Wells"},
        //{id: "Leases", label: "Leases"},
        //{id: "Interestowners", label: "Interest Owners"}
    ];
    $.each(relatedArray, function(index, value) {
        loadRelated(value.id, function() {
            masterVM.relatedTypes.push({id: value.id, label: value.label, count: tempList.length, action: function() {
                    loadRelated(value.id, getData);
                }
            });
        });
    });

}
function getData(itemList, type) {
    masterVM.relatedItems.removeAll();
    switch (type) {
        case "Tracts":
            masterVM.relatedType("Related Tracts");
            $.each(itemList, function(idx, val) {
                var relatedItemUrl = "#leasecheck/tract/view/:" + val.Id;
                masterVM.relatedItems.push({id: val.Id, name: val.GrossAcres, data1: val.SurveryName, data2: "", url: relatedItemUrl});
            });
            break;
        case "Wells":
            masterVM.relatedType("Related Wells");
            $.each(itemList, function(idx, val) {
                masterVM.relatedItems.push({id: "something1", name: "something1", data1: "something", data2: "deathstar", url: ""});
            });
            break;
        case "Leases":
            masterVM.relatedType("Related Leases");
            $.each(itemList, function(idx, val) {
                masterVM.relatedItems.push({id: "something1", name: "something1", data1: "something", data2: "deathstar", url: ""});
            });
            break;
        case "Interestowners":
            masterVM.relatedType("Related Interest Owners");
            $.each(itemList, function(idx, val) {
                masterVM.relatedItems.push({id: "something1", name: "something1", data1: "something", data2: "deathstar", url: ""});
            });
            break;
        case "Mineralowners":
            masterVM.relatedType("Related Interest Owners");
            $.each(itemList, function(idx, val) {
                masterVM.relatedItems.push({id: "something1", name: "something1", data1: "something", data2: "deathstar", url: ""});
            });
            break;
        case "Interestowners":
            masterVM.relatedType("Related Interest Owners");
            $.each(itemList, function(idx, val) {
                masterVM.relatedItems.push({id: "something1", name: "something1", data1: "something", data2: "deathstar", url: ""});
            });
            break;
    }
    $.each(itemList, function(idx, val) {
    });
    masterVM.relatedButtons.push({id: "collapse", label: "<i class='halflings-icon chevron-down'></i>", action: function() {
            $('#relatedItemList').toggle();
        }, CSSClass: "btn-minimize"});
}