
var masterVM = {
    formMenuTitle: ko.observable(""),
    contextMenuTitle: ko.observable(""),
    referencePointLabel: ko.observable(""),
    referencePoint: ko.observable(""),
    currentPageLabel: ko.observable(""),
    menuHelpText: ko.observable(""),
    modalTitle: ko.observable(""),
    modalHTML: ko.observable(""),
    modalSentLink: ko.observable(""),
    spinnerText: ko.observable("Loading, Please Wait"),
    showMap: ko.observable(1),
    relatedButtons: ko.observableArray([]),
    modalButtons: ko.observableArray([]),
    relatedTypes: ko.observableArray([]),
    relatedType: ko.observable(""),
    relatedItems: ko.observableArray([]),
    contextdata: ko.observableArray([]),
    contextualButtons: ko.observableArray([]),
    contextualReports: ko.observableArray([]),
    commandMenuButtons: ko.observableArray([]),
    mainMenu: ko.observableArray([]),
    sideNavMenuItems: ko.observableArray([]),
    pageData: ko.observableArray([])

};

updateVM(masterVM);

function updateVM(vm) {

    ko.applyBindings(vm);
}

ko.extenders.numeric = function(target, precision) {
    //create a writeable computed observable to intercept writes to our observable
    var result = ko.computed({
        read: target, //always return the original observables value
        write: function(newValue) {
            var current = target(),
                    roundingMultiplier = Math.pow(10, precision),
                    newValueAsNum = isNaN(newValue) ? 0 : parseFloat(+newValue),
                    valueToWrite = Math.round(newValueAsNum * roundingMultiplier) / roundingMultiplier;

            //only write if it changed
            if (valueToWrite !== current) {
                target(valueToWrite);
            } else {
                //if the rounded value is the same, but a different value was written, force a notification for the current field
                if (newValue !== current) {
                    target.notifySubscribers(valueToWrite);
                }
            }
        }
    }).extend({notify: 'always'});

    //initialize with current value to make sure it is rounded appropriately
    result(target());
    //return the new computed observable
    return result;
};

ko.extenders.required = function(target, overrideMessage) {
    //add some sub-observables to our observable
    target.hasError = ko.observable();
    target.validationMessage = ko.observable();

    //define a function to do validation
    function validate(newValue) {
        target.hasError(newValue ? false : true);
        target.validationMessage(newValue ? "" : overrideMessage || "This field is required");
    }

    //initial validation
    validate(target());

    //validate whenever the value changes
    target.subscribe(validate);

    //return the original observable
    return target;
};

ko.bindingHandlers.datepicker = {
        init: function (element, valueAccessor, allBindingsAccessor) {

                //initialize datepicker with some optional options
                var options = allBindingsAccessor().datepickerOptions || {};

                $(element).datepicker(options);

                //handle the field changing
                $(element).change(function(){
                        var observable = valueAccessor();
                        observable($.datepicker.formatDate('yy-mm-dd', $(element).datepicker('getDate')));
                });

                //if using Knockout validation
                //
                //if (observable.isValid()) {
                //    observable($(element).datepicker("getDate"));

                //    $(element).blur();
                //}

                //handle disposal (if KO removes by the template binding)
                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                        $(element).datepicker("destroy");
                });

                //if using Knockout validation
                //
                //ko.bindingHandlers.validationCore.init(element, valueAccessor, allBindingsAccessor);

        },
        //update the control when the view model changes
        update: function (element, valueAccessor) {

                var value = ko.utils.unwrapObservable(valueAccessor());

                if (typeof (value) === "string") { // JSON string from server
                        value = value.split("T")[0]; // Removes time
                }

                var current = $(element).datepicker("getDate");

                if (value - current !== 0) {
                        $(element).datepicker("setDate", value);
                }
        }
};