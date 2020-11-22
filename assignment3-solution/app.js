(function() {
    "use strict";

    angular.module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .constant("ApiPath", "https://davids-restaurant.herokuapp.com/menu_items.json")
    .directive("foundItems", FoundItemsDirective);

    // Controller
    NarrowItDownController.$inject = ["MenuSearchService"]
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this

        narrowItDown.searchTerm = ""
        narrowItDown.message = ""
        
        narrowItDown.search = function () {

            if (narrowItDown.searchTerm == "") {
                narrowItDown.found = []
                narrowItDown.message = MenuSearchService.empty()
            }

            else {
                var promise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
                promise.then(function (search) {
                    if (search.length == 0) {
                        narrowItDown.message = MenuSearchService.empty()
                    }

                    else {
                        narrowItDown.message = ""
                    }
                    
                    narrowItDown.found = search
                })
                .catch(function (error) {
                    console.log(error)
                })
            }
        }

        narrowItDown.removeItem = function (itemIndex) {
            return (MenuSearchService.remove(itemIndex))
        }
    }

    // Service
    MenuSearchService.$inject = ["$http", "ApiPath"]
    function MenuSearchService ($http, ApiPath) {
        var service = this
        var foundItems = []

        service.getMatchedMenuItems = function (searchTerm) {

            return $http ({
                method: "GET",
                url: ApiPath,
            })
            .then (function (response) {
                searchTerm = searchTerm.toLowerCase()
                foundItems = []
                for (var item of response.data.menu_items) {   
                    var itemDescription = item.description.toLowerCase()                 
                    if (itemDescription.includes(searchTerm)) {
                        foundItems.push(item)
                    }
                }

                return foundItems
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        service.remove = function (itemIndex) {
            foundItems.splice(itemIndex,1)
            return foundItems
        }

        service.empty = function () {
            return ("Nothing found")
        }
    }

    // Directive
    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                onRemove: "&",
                message: "<"
            }
        };
        
        return ddo;
    }

})();