(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['MenuService', 'UserService'];
    function SignUpController(MenuService, UserService) {
        this.firstname = null;
        this.lastname = null;
        this.email = null;
        this.phone = null;

        this.menuItemShortName = null;
        this.menuItem = null;

        this.showInvalidMenuItemMessage = false;
        this.isSaved = false;

        this.submit = () => {
            this.isSaved = false;
            const categoryShortName = this.menuItemShortName.charAt(0);
            const itemNumber = this.menuItemShortName.substr(1) - 1;
            MenuService.getMenuItem(categoryShortName, itemNumber).then((response) => {
                if(!response) {
                    this.showInvalidMenuItemMessage = true;
                } else {
                    this.showInvalidMenuItemMessage = false;
                    this.menuItem = response;
                    this.menuItem.category = {
                        short_name: categoryShortName
                    };
                    this.saveUserInformation();
                    this.isSaved = true;
                }
            });
        };

        this.saveUserInformation = () => {
            const user = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                phone: this.phone,
                favoriteMenuItem: this.menuItem
            };
            UserService.saveUser(user);
        }
    }
    
    })();
    