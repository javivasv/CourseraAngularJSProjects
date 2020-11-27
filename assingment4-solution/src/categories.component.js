(function () {
    "use strict";
    
    angular.module("data")
    .component("categoriesList", {
        templateUrl: "src/templates/categoriesList.html",
        bindings: {
            categories: "<"
        }
    });
    
})();    