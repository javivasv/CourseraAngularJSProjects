(function () {
    "use strict";
    
    angular.module("data")
    .controller("CategoriesController", CategoriesController);
    
    CategoriesController.$inject = ["MenuDataService", "categoriesList"];
    function CategoriesController(MenuDataService, categoriesList) {
        var categories = this
        categories.categoriesList = categoriesList
    }
    
})();    