(function () {
    "use strict";
    
    angular.module("data")
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise("/");

        // *** Set up UI states ***
        $stateProvider

        // Home page
        .state("home", {
            url: "/",
            templateUrl: "src/templates/home.html",
        })

        // Categories page
        .state("categories", {
            url: "/categories",
            templateUrl: "src/templates/categories.html",
            controller: "CategoriesController as categories",
            resolve: {
                categoriesList: ["MenuDataService", function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        // Items page
        .state("items", {
            url: "/items/{items}",
            templateUrl: "src/templates/items.html",
            controller: "ItemsController as items",
            resolve: {
                itemsList: ["MenuDataService", "$stateParams", 
                    function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.items);
                    }
                ]
            }
        });
    }
    
})();