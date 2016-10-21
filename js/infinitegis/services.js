/* 
 * miscellaneous utility services
 */

function getLists(apiCall, callback) {
    tempList = [];
    $.ajax({
        url: _apiBase + apiCall,
        type: "GET",
        dataType: "json",
        beforeSend: function(request) {
            waitSpinnerStart();

            request.setRequestHeader("ClientId", localStorage['_clientId']);
            request.setRequestHeader("LandProjectId", localStorage['_projectId']);
            request.setRequestHeader("Audience", _apiAudience);
            request.setRequestHeader("AuthJWT", localStorage['_apiToken']);
            request.setRequestHeader("UserId", localStorage["_loggedInUserId"]);
        }
    }).done(function(data, textStatus, response) {
        console.log(data)
        if (apiCall === "Tracts")
            _currPageIsDirty = false;
        //save updated token
        localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");
        //run callback
        tempList = data;
        if (callback && callback.constructor === Function)
            callback(data, apiCall);
    })
            .error(function(jqXHR, textStatus, errorThrown) {
                var msg = 'failed update. response text: "' + jqXHR.responseText + '"';
                noty({"text": msg, "layout": "topRight", "type": "error"});
                console.log(msg);
            })
            .always(function(jqXHR, textStatus) {
                waitSpinnerStop();
                console.log(textStatus)
            });
}

/* delete something */
function deleteItem(id, apiCall, callback) {
    $.ajax({
        url: _apiBase + apiCall + "/" + id.toString(),
        type: "DELETE",
        beforeSend: function(request) {
            waitSpinnerStart();
            request.setRequestHeader("ClientId", localStorage["_clientId"]);
            request.setRequestHeader("LandProjectId", localStorage["_projectId"]);
            request.setRequestHeader("Audience", _apiAudience);
            request.setRequestHeader("AuthJWT", localStorage['_apiToken']);
            request.setRequestHeader("UserId", localStorage["_loggedInUserId"]);
        }
    }).done(function(data, textStatus, response) {
        console.log(id + " deleted")
        _currPageIsDirty = false;

        noty({"text": apiCall + ": " + id + " Deleted Successfully", "layout": "topRight", "type": "success"});

        localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");
        require(["dojo/hash"], function(hash) {
            hash("leasecheck/tract/index");
        });

        if (callback && callback.constructor === Function)
            callback(data, apiCall);
    })
            .error(function(jqXHR, textStatus, errorThrown) {

                var msg = 'failed update. response text: "' + jqXHR.responseText + '"';
                noty({"text": msg, "layout": "topRight", "type": "error"});
                console.log(msg);
            })
            .always(function(jqXHR, textStatus) {
                waitSpinnerStop();
                console.log(jqXHR)
                console.log(textStatus)
            });
}

/* create a new object */
function createItem(theData, apiCall, callback) {
    $.ajax({
        type: 'POST',
        url: _apiBase + apiCall,
        dataType: "json",
        async: false,
        beforeSend: function(request) {
            waitSpinnerStart();
            request.setRequestHeader("ClientId", localStorage['_clientId']);
            request.setRequestHeader("LandProjectId", localStorage['_projectId']);
            request.setRequestHeader("Audience", _apiAudience);
            request.setRequestHeader("AuthJWT", localStorage['_apiToken']);
            request.setRequestHeader("UserId", localStorage["_loggedInUserId"]);
        },
        data: theData
    })
            .done(function(data, textStatus, response) {
                _currPageIsDirty = false;
                //save updated token
                localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");
                noty({"text": "Tract Added Successfully", "layout": "topRight", "type": "success"});

                if (callback && callback.constructor === Function)
                    callback(data, apiCall);

            })
            .error(function(jqXHR, textStatus, errorThrown) {
                var msg = 'failed update. response text: "' + jqXHR.responseText + '"';
                console.log(msg);
                noty({"text": msg, "layout": "topRight", "type": "error"});
            })
            .always(function(jqXHR, textStatus) {
                waitSpinnerStop();
                console.log(jqXHR);
                console.log(textStatus);
            });
}
;

/* update existing object */
function updateItem(id, theData, apiCall, callback) {

    $.ajax({
        type: 'PUT',
        url: _apiBase + apiCall + "/" + id,
        dataType: "json",
        async: false,
        beforeSend: function(request) {
            waitSpinnerStart();
            request.setRequestHeader("ClientId", localStorage['_clientId']);
            request.setRequestHeader("LandProjectId", localStorage['_projectId']);
            request.setRequestHeader("Audience", _apiAudience);
            request.setRequestHeader("AuthJWT", localStorage['_apiToken']);
            request.setRequestHeader("UserId", localStorage["_loggedInUserId"]);
        },
        data: theData

    })
            .done(function(data, textStatus, response) {
                _currPageIsDirty = false;
                //save updated token
                localStorage['_apiToken'] = response.getResponseHeader("AuthJWT");
                //noty({"text": "Item Added Successfully", "layout": "topRight", "type": "success"});

                if (callback && callback.constructor === Function)
                    callback(data, apiCall);
                console.log(theData)

            })
            .error(function(jqXHR, textStatus, errorThrown) {
                var msg = 'failed update. response text: "' + jqXHR.responseText + '"';
                console.log(msg);
                noty({"text": msg, "layout": "topRight", "type": "error"});
            })
            .always(function(jqXHR, textStatus, data) {
                waitSpinnerStop();
                console.log(jqXHR);
                console.log(textStatus);


            });
}

function uploadFile(data, type, callback) {
    $.ajax({
        type: "POST",
        url: _apiBase + "testfileupload",
        contentType: false,
        processData: false,
        data: data,
        beforeSend: function(request) {
            //waitSpinnerStart();

            request.setRequestHeader("ClientId", localStorage['_clientId']);
            request.setRequestHeader("LandProjectId", localStorage['_projectId']);
            request.setRequestHeader("Audience", _apiAudience);
            request.setRequestHeader("AuthJWT", localStorage['_apiToken']);
            request.setRequestHeader("UserId", localStorage["_loggedInUserId"]);
        },
        success: function(data, status, response) {
            for (i = 0; i < data.length; i++) {
                if (data[0].Success)
                    alert('Upload successful!');
            }
            apiToken = response.getResponseHeader("AuthJWT");
        }
    });
}

/* Utility Functions */
/* rewrite the list for the simple grid to link to view page */
function idToLink(itemList, columnName, IdName) {
    var newList = ko.observableArray();
    $.each(itemList, function(index, item) {
        console.log(item)
        console.log(columnName)
        console.log(IdName)
        if (item[IdName])
        {
            var pageSplit = pageRoute.route.split("/");
            var newValue = "<a href='#" + pageSplit[1] + "/" + pageSplit[2] + "/view/:" + item[IdName].toString() + "'>";
            console.log(item[columnName])
            newValue += (item[columnName] + "</a>");
            item[IdName] = newValue;

            newList.push(item);
        }
    });
    return newList;
}
