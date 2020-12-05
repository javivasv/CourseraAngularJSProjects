(function () {
    "use strict";
    
    angular.module('public')
    .service('SignUpService', SignUpService);
    
    SignUpService.$inject = ["$http"];
    function SignUpService($http) {
        var service = this;
        var currentUser
    
        service.checkMenuItem = function (user) {
            return $http ({
                method: "GET",
                url: `https://javivasv-angular-course.herokuapp.com/menu_items/${user.item_short_name}.json`
            })
            .then (function (response){
                user.item_name = response.data.name
                user.item_description = response.data.description
                currentUser = user
                return (response)
            })
            .catch (function (error) {
                return (error)
            })
        }

        service.getUser = function () {
            return(currentUser)
        }
    }
    
})();    