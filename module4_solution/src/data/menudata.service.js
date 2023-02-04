(function () {
    'use strict';
    
    angular.module('Data')
    .service('MenuDataService', MenuDataService);
    
    
    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
      const service = this;

      service.getAllCategories = () => {
        return $http({
            method: "GET",
            url: ('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json')
        }).then((response) => {
            return response.data;
        });
      }

      service.getItemsForCategory = (categoryShortName) => {
        return $http.get(`https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${categoryShortName}.json`)
        .then((response) => {
            return response.data;
        });
      } 
    }
    
})();
    