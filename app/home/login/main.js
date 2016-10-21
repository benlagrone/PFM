var clientProjectList;
function homeLoginCustomizeMasterVM() {
    //TODO:  any other customizations of master view model
    masterVM.showMap("yes");
    masterVM.mainMenu.removeAll();
    masterVM.pageData.removeAll();
    masterVM.pageData.push(
            {
                title: "login",
            });
    masterVM.contextdata.removeAll();
    masterVM.referencePointLabel("");
    masterVM.referencePoint("");
    masterVM.commandMenuButtons.removeAll();
    masterVM.sideNavMenuItems.removeAll();
    masterVM.relatedTypes.removeAll();
    masterVM.relatedItems.removeAll();
    masterVM.relatedButtons.removeAll();
    masterVM.formMenuTitle("login");
    masterVM.modalHTML("Please wait while we load your projects...");
    masterVM.spinnerText("Please wait");
    masterVM.contextMenuTitle("login");
    masterVM.currentPageLabel("login");
    //masterVM.menuHelpText("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    masterVM.modalTitle("Select a Client & project");

    masterVM.modalButtons.removeAll();


    masterVM.modalButtons.push({id: "cancel", label: "Cancel", action: function() {

            forceLogout();
        }, CSSClass: "foo"});
}

function homeLoginIndexVM() {
    footext = ko.observable("login");
}


$(".login").click(function() {
    loginAction();
});
$(".login button.close").live('click', function() {
    forceLogout();
});

function buildModalHTML() {
    return "foo"
}

function loginAction() {
    waitSpinnerStart();
    $.post(_apiAuthBase + "Token",
            //{username: "zeb", password: "zeb", audience: _apiAudience},
                    {username: $("#username").val(), password: $("#password").val(), audience: _apiAudience},
            function(data) {
                //on success, 'data' contains a security token
                localStorage["_apiToken"] = data.Token;
                localStorage["_loggedInUserId"] = data.Id;
                getUserInfo(data.Id);
                waitSpinnerStop();
                $('#myModal').modal({
                    show: true,
                    backdrop: true,
                    keyboard: false
                });
                $(".alert").addClass('hidden');
            }, 'json'
                    ).fail(function(jqXHR, textStatus, errorThrown) {
                var msg = 'failed login. response text: "' + jqXHR.responseText + '"';
                $(".alert").removeClass('hidden');
                $("#password").focus(function() {
                    $(".alert").addClass('hidden');
                });
                waitSpinnerStop();
            });
        }

//get the user info stuff
//api/userinfo/%userid%
function getUserInfo(UserId) {
    $.ajax({
        url: _apiBase + "Userinfo/" + UserId,
        type: "GET",
        dataType: "json",
        beforeSend: function(request) {

            request.setRequestHeader("Audience", _apiAudience);
            request.setRequestHeader("AuthJWT", localStorage['_apiToken']);
            request.setRequestHeader("UserId", localStorage["_loggedInUserId"]);
        }

    }).done(function(data, textStatus, response) {
        var theHTMLList = '<div class="control-group"><label class="control-label" for="selectErrorLogin">Select Your Client Project</label><div class="controls"><select data-placeholder="Click to select" id="selectErrorLogin" class="login-client-project" data-rel="chosen-login"><option value=""></option>';
        for (var i = 0; i < data.Clients.length; i++)
        {
            theHTMLList += '<optgroup label="' + data.Clients[i].Name + '">';
            var clientProjects = $.grep(data.Projects, function(n, k) {
                return n.ClientId === data.Clients[i].Id;
            });
            $.each(clientProjects, function(l, m) {
                theHTMLList += '<option value="' + data.Clients[i].Id + '-' + m.Id + '">' + m.Name + '</option>';
            });
            theHTMLList += '</optgroup>';
        }
        theHTMLList += '</select></div></div>';
        clientProjectList = data;
        masterVM.modalHTML(theHTMLList);
        $('[data-rel="chosen-login"],[rel="chosen-login"]').val('');
        $('.login-client-project').trigger('liszt:updated');
        $('[data-rel="chosen-login"],[rel="chosen-login"]').chosen();
        $('select[data-rel="chosen-login"]').on('change', function(evt, params) {

            var chosenClientProjectID = params.selected;
            var chosenClientProjectIDArray = chosenClientProjectID.split("-");
            localStorage["_clientId"] = chosenClientProjectIDArray[0];
            localStorage["_projectId"] = chosenClientProjectIDArray[1];
    masterVM.modalButtons.removeAll();
    masterVM.modalButtons.push({id: "selectGo", label: "Select and Go", action: function() {
            var nameObject = $.grep(clientProjectList.Clients, function(k, i) {
                return k.Id.toString() === localStorage["_clientId"].toString();
            });
            var projectObject = $.grep(clientProjectList.Projects, function(l, m) {
                return l.Id.toString() === localStorage["_projectId"].toString();
            });
            localStorage["_clientName"] = nameObject[0].Name.toString();
            localStorage["_projectName"] = projectObject[0].Name.toString();
            
        masterVM.modalHTML("");
        $('.login-client-project').trigger('liszt:updated');
            require([
                "infinitegis/infiniteGIS"
            ]);
            require(["esri/map", "dojo/router", "dojo/hash", "infinitegis/viewModel", "infinitegis/routing"], function(Map, router, hash) {
                runApp(Map, router, hash);
            });
        }, CSSClass: "foo"});

    masterVM.modalButtons.push({id: "cancel", label: "Cancel", action: function() {

            forceLogout();
        }, CSSClass: "foo"});
           
        });
        
    })
            .error(function(jqXHR, textStatus, errorThrown) {

                var msg = 'failed update. response text: "' + jqXHR.responseText + '"';
                console.log(msg);
            })
            .always(function(jqXHR, textStatus) {
                //waitSpinnerStop();
                //console.log(jqXHR)
                //console.log(textStatus)
            });

}
