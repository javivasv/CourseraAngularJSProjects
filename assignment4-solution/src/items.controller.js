(function () {
    "use strict";
    
    angular.module("data")
    .controller("ItemsController", ItemsController);
    
    ItemsController.$inject = ["MenuDataService", "itemsList"];
    function ItemsController(MenuDataService, itemsList) {
        var items = this
        items.itemsList = itemsList 
    }
    
})();    