//globals
var _apiBase = "http://infiniteapi.azurewebsites.net/api/";
var _apiAuthBase = "http://infiniteauth.azurewebsites.net/apiauth/";
//var _apiBase = "http://localhost:6500/api/";
//var _apiAuthBase = "http://localhost:6501/apiauth/";
var _clientId;
var _clientName;
var _projectId;
var _projectName;
var _apiAudience = "InfiniteLandv2";
var _apiToken;
var _loggedInUserId = localStorage["_loggedInUserId"];
var _currPageIsDirty = false;
var _saveCurrPageFcn = null;
var routerRegistry = 0;
var loggedIn = 0;

function isApiTokenValid() {
    //check local storage for token existence
    var result = false;

    if (localStorage['_apiToken'] == null || localStorage['_apiToken'] == "")
        return result;

    //check token's validity against api
    $.ajax({
        url: _apiBase + "TokenCheck",
        data: {token: localStorage['_apiToken'], audience: _apiAudience},
        async: false,
        type: 'POST',
        success: function() {
            result = true;
        }
    });

    return result;
}
;

//  define child page JS files that may or may not be required
//      depending on whether the user visits them
var startHash = location.hash
//console.log(startHash)
var map;

/* This function runs to see if you are logged in*/
if (isApiTokenValid()) {
    require([
        "infinitegis/infiniteGIS","infinitegis/viewModel","infinitegis/routing"
    ]);
    require(["esri/map","dojo/router","dojo/hash"],function(Map, router, hash){
    runApp(Map, router, hash);
});
} else {
    //if not logged in, go to the login function
    login();
}
;


function login() {
    
    require(["esri/map", "dojo/router", "infinitegis/viewModel"], function(Map, router) {
        map = new Map("mapDiv", {
            center: [-56, 38],
            zoom: 4,
            basemap: "streets"
        });
        //do stuff here 
        router.register("login", function(evt) {
            if ($('div.inner').length < 1) {
                $.ajax({
                    type: "GET",
                    url: "app/home/login/index.html ",
                    data: "",
                    success: function(data) {
                        $(".inner").hide();
                        $(".page-host").append(data);
                        require(["app/home/login/main.js"], function(x) {
                            homeLoginCustomizeMasterVM();
                        });
                    },
                    fail:function(){}
                });
            } else {
                $(".inner").hide();
                if($("[data-pageid='home-login-index']").length){
                    $("[data-pageid='home-login-index']").show();
                    homeLoginCustomizeMasterVM();
                } else {
                $.ajax({
                    type: "GET",
                    url: "app/home/login/index.html ",
                    data: "",
                    success: function(data) {
                        $(".inner").hide();
                        $(".page-host").append(data);
                        require(["app/home/login/main.js"], function(x) {
                            homeLoginCustomizeMasterVM();
                        });
                    },
                    fail:function(){}
                });
            }
            };
        });
        router.startup();
    });
    require(["dojo/hash"],function(hash){
        hash("login");
    });
};

function waitSpinnerStart() {
    $('.spinner').show();
    $('<div class="wait modal-backdrop fade in"></div>').appendTo(document.body).show('slow');
}

function waitSpinnerStop() {
    $(".wait.modal-backdrop").remove();
    $('.spinner').hide();
}

function checkCredentials(){
    //console.log(localStorage["_clientId"]=='null'||localStorage["_projectId"]=='null')
    if (localStorage["_clientId"]=='null'||localStorage["_projectId"]=='null')
    forceLogout();
}

function forceLogout() {
    masterVM.spinnerText("You are being logged out, please wait.");
    _clientId = null;
    _projectId = null;
    _apiToken = null;
    localStorage["_clientId"] = null;
    localStorage["_projectId"] = null;
    localStorage['_apiToken'] = null;
    setTimeout(function() {
        waitSpinnerStart();
        require(["dojo/hash"], function(hash) {
            hash('redirecting')
        })
    }, 1000);

    setTimeout(function() {
        waitSpinnerStop();
        login();
    }, 3000);
};

function checkImage(src) {
  var img = new Image();
  img.onload = function() {
      // code to set the src on success
      //$('.background-img').css('background', 'url(' + src + ') no-repeat 50% 50%');\
      console.log('true')
      return src;
  };
  img.onerror = function() {
    // doesn't exist or error loading
    //$('.background-img').addClass('fa fa-file-text-o').css('no-repeat 50% 50%');
      console.log('error')
    return false;
  };

  img.src = src; // fires off loading of image
  //return true;
}

