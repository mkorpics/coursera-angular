(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    
    ItemsController.$inject = ['menuItemsForCategory'];
    function ItemsController(menuItemsForCategory) {
      this.menuItemsForCategory = menuItemsForCategory;
    }
    
    })();
    