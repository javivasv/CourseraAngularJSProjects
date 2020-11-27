(function () {
    'use strict';
    
    angular.module("data")
    .service("MenuDataService", MenuDataService);

    MenuDataService.$inject = ["$http", "$q", "$timeout"]
    function MenuDataService($http, $q, $timeout) {
        var service = this

        service.getAllCategories = function () {
            return $http ({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json",
            })
            .then (function (response) {
                var deferred = $q.defer();

                $timeout(function () {
                    deferred.resolve(response.data);
                }, 800);

                return deferred.promise;
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        service.getItemsForCategory = function (categoryShortName) {
            return $http ({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName,
            })
            .then (function (response) {
                var deferred = $q.defer();

                $timeout(function () {
                    deferred.resolve(response.data.menu_items);
                }, 800);

                return deferred.promise;
            })
            .catch(function (error) {
                console.log(error);
            })
        }

    }

})();    