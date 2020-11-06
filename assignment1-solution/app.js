(function() {
    "use strict";

    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController)

    LunchCheckController.$inject = ["$scope"]
    function LunchCheckController ($scope) {
        $scope.menu = ""
        $scope.message = ""

        $scope.CheckMenu = function () {

            if ($scope.menu == "") {
                $scope.message = "Please enter data first"
            }

            else {
                var items = $scope.menu.split(",")

                function CheckEmpty (noEmpty) {
                    return noEmpty != ""
                }

                items = items.filter(CheckEmpty)
                
                if (items.length == 0) {
                    $scope.message = "Please enter data first"

                }

                else if (items.length <= 3) {
                    $scope.message = "Enjoy!"
                }

                else {
                    $scope.message = "Too much!"
                }
            }
        }
    }

})();