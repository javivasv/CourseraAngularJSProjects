(function () {
    "use strict";
    
    angular.module("data")
    .component("itemsList", {
        templateUrl: "src/templates/itemsList.html",
        bindings: {
            items: "<"
        }
    });
    
})();    