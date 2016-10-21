/* this file handles the page transition functions */
//this is the router functions
function pageTransition(evt){
    checkCredentials();
    evt.preventDefault();

    _currPageIsDirty = false;
	
    //strip leading colon from any params (comes from Dojo routing)
    $.map(evt.params, function(value, key) {
        if(value.toString().length > 0 && value.toString()[0] == ':')
            evt.params[key] = value.substring(1);
    });	
	
    $("#togglemenu").removeClass("pressed");
    $(".inner").hide();
    var menuRoute = pageRoute.route +'/nav.html'
    //is the page empty
    if ($('div.inner').length == 0){
        //yes,load the requested page
        fillInner(pageRoute, evt.params);
    //the page is not empty 
    } else {
        //no, call the function check to see if the requested page exists
        var found = markIfFound();
        //now we know if the page is already there
        if (found !=1){
            //call the function to invoke the page
            fillInner(pageRoute, evt.params);    
        } else {
            //found was marked as positive, soapply the bindings, the other bindings are applied within the function called
            window[makeChildViewModelName("CustomizeMasterVM")](evt.params);
        }
    };
};

//check each existing element to see if it is the existing page
//reset found to zero each time
function markIfFound(){
    var markFound = 0;
    $('div[data-pageid]').each(function(key, value){
        console.log($(this).data('pageid'));
        console.log(convertRoutDiv("-"))
        if ($(this).data('pageid') == convertRoutDiv("-")){
            markFound = "1";
            $(this).show();
            return true;
        } 
    });
    console.log(markFound)
    return markFound;
};

        
//the function to createthe inner div
var fillInner = function(pageRoute, pageFcnParams){
    var getInnerFile =  pageRoute.route + "/" + pageRoute.page;
    $.ajax({
        type:"GET",
        url:getInnerFile,
        data:"",
        success: function(data){
            $(".page-host").append(data);
            require([pageRoute.route + "/main.js"], function(x){
                window[makeChildViewModelName("CustomizeMasterVM")](pageFcnParams);
            }); 
        }
    })   
};

/* text string modifier utility  functions*/

//convert the path variables to a usable path with custom splitter
function convertRoutDiv(splitter){
    var pageSplit = pageRoute.page.split(".");
    var pathSplit = pageRoute.route.split("/");
    var fullpath = pathSplit[1] + splitter + pathSplit[2] + splitter + pageSplit[0];
    return fullpath;
}

//constructs the label for the context bar - called by the child view 
function writeContentPanelLabel(){
    var pageSplit = pageRoute.page.split(".");
    var pathSplit = pageRoute.route.split("/");
    return toTitleCase(pathSplit[1]) + " " + toTitleCase(pathSplit[2]) + " " + toTitleCase(pageSplit[0]);
}

function makeChildViewModelName(endingName){
    var Name = pageRoute.route.split("/");
    return Name[1] + toTitleCase(Name[2]) + endingName;
};

function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

function relatedItems(foo,bar){
    var routeSplit = pageRoute.route.split("/");
    var relatedType = 'Tracts';
    require(['app/relateditems/'+routeSplit[2]+'/main.js'], function(){
        window[makeChildViewModelName("RelatedItemsVM")](relatedType);
        //relatedItems(relatedType);
    });
}

function padNumbers(str,max){
    console.log(str +','+max)
    return str.length < max ? padNumbers("0" + str, max) : str;
    
}
