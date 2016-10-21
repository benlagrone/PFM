/*this page holds the primary routng table, and the general functions not associated with page transition*/
function runApp(Map, router, hash) {
    map = new Map("mapDiv", {
        center: [-96, 32],
        zoom: 6,
        basemap: "streets"
    });

    var path;
    var page;

    if (routerRegistry == 0) {
        router.register("home", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/home/dashboard"
            }
            pageTransition(evt);
        });
        /* logout*/
        router.register("logout", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/home/logout"
            };
            pageTransition(evt);
        });
        /* login*/
        router.register("login", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/home/login"
            };
            //pageTransition(evt)
        });
        /* reports*/
        router.register("reports", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/reports/dashboard"
            }
            pageTransition(evt);
        });
        //**register lease check apps**
        // tract registration
        router.register("leasecheck", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leasecheck/tract"
            };
            pageTransition(evt);
        });
        // tract registration
        router.register("leasecheck/tract/index", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leasecheck/tract"
            }
            pageTransition(evt);

        });
        // view tract registration
        router.register("leasecheck/tract/view/:id", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leasecheck/tract"
            };
            pageTransition(evt);
        });
        // tract new registration
        router.register("leasecheck/tract/new", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leasecheck/tract"
            };
            pageTransition(evt);
        });
        // MO registration
        router.register("leasecheck/interestowner/index", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leasecheck/interestowner"
            };
            pageTransition(evt);
        });
        // MO new registration
        router.register("leasecheck/interestowner/new", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leasecheck/interestowner"
            };
            pageTransition(evt);
        });
        // Wells registration
        //wells is plural to avoid conflicts with the bootstrap class well
        //however well is singular on all views
        router.register("leasecheck/well/index", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leasecheck/well"
            };
            pageTransition(evt);
        });
        // Wells new registration
        //wells is plural to avoid conflicts with the bootstrap class well
        //however well is singular on all views
        router.register("leasecheck/well/new", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leasecheck/well"
            };
            pageTransition(evt);
        });
        // view well registration
        router.register("leasecheck/well/view/:id", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leasecheck/well"
            };
            pageTransition(evt);
        });
        // lease registration
        router.register("leasecheck/lease/index", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leasecheck/lease"
            }
            pageTransition(evt)
        });
        // lease new registration
        router.register("leasecheck/lease/new", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leasecheck/lease"
            }
            pageTransition(evt)
        });
        // view well registration
        router.register("leasecheck/lease/view/:id", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leasecheck/lease"
            };
            pageTransition(evt);
        });
        // lease new registration
        router.register("leasecheck/mineralinterest/new", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leasecheck/mineralinterest"
            };
            pageTransition(evt);
        });
        // lease new registration
        router.register("leasecheck/mineralinterest/index", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leasecheck/mineralinterest"
            };
            pageTransition(evt);
        });
        // view well registration
        router.register("leasecheck/mineralinterest/view/:id", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leasecheck/mineralinterest"
            };
            pageTransition(evt);
        });
        //**register lease acquisition apps**
        // tract registration
        router.register("leaseacquisition", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leaseacquisition/tract"
            }
            pageTransition(evt)
        });
        // tract registration
        router.register("leaseacquisition/tract/index", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leaseacquisition/tract"
            }
            pageTransition(evt)
        });
        // tract new registration
        router.register("leaseacquisition/tract/new", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leaseacquisition/tract"
            };
            pageTransition(evt);
        });
        // MO new registration
        router.register("leaseacquisition/interestowner/new", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leaseacquisition/interestowner"
            }
            pageTransition(evt)
        });
        // MO registration
        router.register("leaseacquisition/interestowner/index", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leaseacquisition/interestowner"
            };
            pageTransition(evt);
        });
        // view well registration
        router.register("leasecheck/interestowner/view/:id", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leasecheck/interestowner"
            };
            pageTransition(evt);
        });
        // Well registration
        router.register("leaseacquisition/well/index", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leaseacquisition/well"
            }
            pageTransition(evt)
        });
        // Well new registration
        router.register("leaseacquisition/well/new", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leaseacquisition/well"
            }
            pageTransition(evt)
        });
        // lease registration
        router.register("leaseacquisition/lease/index", function(evt) {
            pageRoute = {
                page: "index.html",
                route: "app/leaseacquisition/lease"
            }
            pageTransition(evt)
        });
        // lease new registration
        router.register("leaseacquisition/lease/new", function(evt) {
            pageRoute = {
                page: "new.html",
                route: "app/leaseacquisition/lease"
            };
            pageTransition(evt);
        });
    }
    
    if (startHash.length == 0 || startHash == '#login' || location.hash == '#login') {
        hash("home");
    } else {
        //router.go(startHash.substring(1))
    }

    router.startup();
    routerRegistry = 1;
}
;

$(document).ready(function() {

    if (typeof (Storage) !== "undefined")
    {
        // Yes! localStorage and sessionStorage support!
    }
    else
    {
        // Sorry! No web storage support..
    }

    //make a click event listener for al llinks to interupt and make sure we dont' ahev dirty data
    // this will interact with the router
    $('a').live('click', function() {
        if (_currPageIsDirty && !$(this).closest('.ignoreModal').length)
        {
            if (!$(this).closest('.controls').length)
            {
                var linkPath = $(this).attr('href');
                masterVM.modalSentLink(linkPath.replace("#", ""));
                launchModal(linkPath.replace("#", ""));
                return false;
            }
        }
    });


    $("#togglemenu").click(function() {
        $("#sidebar").toggle("fast", function() {
            $("#togglemenu").toggleClass("pressed");
        });
    });

    $('.toggleNext').live('click', function() {
        //window.alert('foo')
        $(this).parent().next().toggleClass('hidden');
    });


    $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

   // $(document).ready(function() {
        $('.btn-file :file').live('fileselect', function(event, numFiles, label) {

            var input = $(this).parents('.input-group').find(':text'),
                    log = numFiles > 1 ? numFiles + ' files selected' : label;

            if (input.length) {
                input.val(log);
            } else {
                if (log)
                    alert(log);
            }

        });
   // });


    $('#uploadBtn').live('click', function() {
        
        var pageInfo = pageRoute.route.split("/")
        var files = $("#fileInput").get(0).files;
        if (files.length > 0) {
            if (window.FormData !== undefined) {
                var data = new FormData();
                for (i = 0; i < files.length; i++) {
                    data.append(pageInfo[2] + "Doc|123" + i, files[i]);
                }
                uploadFile(data);
            } else {
                alert("This browser doesn't support HTML5 multiple file uploads!");
            }
        } else {
            alert("No file specified!");
        }
    });

});

//check for current page being dirty
function stayOnDirtyPage() {
    if (_currPageIsDirty) {
        //TODO: replace the window.confirm below with a nice custom modal window
        //window.confirm('foo')
        /*var r =       $('#myModal').modal({
         show:true,
         backdrop:true,
         keyboard:false
         });*/
        if (r == true && _saveCurrPageFcn && _saveCurrPageFcn.constructor === Function)
            _saveCurrPageFcn();
        else if (r == false)
            return true;

        //TODO:  implement a Yes/No/Cancel logic, like the following:
        //                      Yes:    run save function and return false
        //                      No:     just return false
        //                      Cancel: just return true

        return false;   //to allow page transition to continue
    }
}

//set dirty flag to true
var setCurrPageDirty = function() {
    _currPageIsDirty = true;
}

//Modal Window Reusable
function launchModal(sentLink) {
    $('.modal-footer a').data('link', masterVM.modalSentLink);
    $('#myModal').modal({
        show: true,
        backdrop: true,
        keyboard: false
    });

}
;

