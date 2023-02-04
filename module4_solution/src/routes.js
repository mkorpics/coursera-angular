(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/home/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/categories/categories.html',
    controller: 'CategoriesController',
    controllerAs: 'categoriesCtrl',
    resolve: {
      menuCategories: ['MenuDataService', ( MenuDataService) => {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  
  .state('items', {
    url: '/categories/{categoryShortName}/items',
    templateUrl: 'src/menu/items/items.html',
    controller: 'ItemsController',
    controllerAs: 'itemsCtrl',
    resolve: {
      menuItemsForCategory: ['$stateParams','MenuDataService', ($stateParams, MenuDataService) => {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}

})();
