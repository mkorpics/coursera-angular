(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);
    
    
    CategoriesController.$inject = ['menuCategories'];
    function CategoriesController(menuCategories) {
        this.menuCategories = menuCategories;
    }    
})();
    