(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ["SignUpService"];
    function SignUpController(SignUpService) {
      var signUpController = this;

      signUpController.first_name = ""
      signUpController.last_name = ""
      signUpController.email = ""
      signUpController.phone = ""
      signUpController.short_name = ""
      signUpController.status = 0

      signUpController.submit = function () {
        var user = {
            first_name: signUpController.first_name,
            last_name: signUpController.last_name,
            email: signUpController.email,
            phone: signUpController.phone,
            item_short_name: signUpController.short_name.toUpperCase(),
        }

        SignUpService.checkMenuItem(user).then(function (response) {
            if (response.status == 200) {
                signUpController.status = 200
            }
            else {
                signUpController.status = 500
            }
        })
      };
    }
    
})();
    