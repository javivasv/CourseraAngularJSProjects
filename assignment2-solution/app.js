(function() {
    "use strict";

    angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService)

    ToBuyController.$inject = ["ShoppingListCheckOffService"]
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this

        toBuy.toBuyList = ShoppingListCheckOffService.getItemsList(0)

        toBuy.message = false
        
        toBuy.buyItem = function (itemIndex) {
            var message = ShoppingListCheckOffService.buyItem(itemIndex)
            toBuy.message = message
        }
    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"]
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this

        alreadyBought.boughtList = ShoppingListCheckOffService.getItemsList(1)

        alreadyBought.message = function () {
            return ShoppingListCheckOffService.checkBoughtList()
        }
    }

    function ShoppingListCheckOffService() {
        var service = this

        var toBuyList = [
            {
                name: "Bottles of juice",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "200"
            },
            {
                name: "Cookies",
                quantity: "300"
            },
            {
                name: "Bags of chips",
                quantity: "5"
            },
            {
                name: "Strawberries",
                quantity: "5"
            }
        ]

        var boughtList = []

        service.checkBoughtList = function () {
           if (boughtList.length == 0) {
                return true
           }

           else {
               return false
           }
        }
       
        service.getItemsList = function (number) {
            if (number == 0) {
                return toBuyList
            }

            else {
                return boughtList
            }
        };

        service.buyItem = function (itemIndex) {
            boughtList.push(toBuyList[itemIndex])
            toBuyList.splice(itemIndex, 1)

            if (toBuyList.length == 0) {
                return true
            }
        }
    }

})();