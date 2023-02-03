(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
          templateUrl: 'foundItems.html',
          scope: {
            items: '<',
            onRemove: '&'
          },
          controller: FoundItemsController,
          controllerAs: 'found',
          bindToController: true
        };
      
        return ddo;
    }

    function FoundItemsController() { }
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        this.searchTerm = '';
        this.searchedForItems = false;
        this.matchedItems = [];

        this.getMatchedMenuItems = () => {
            if(!this.searchTerm) {
                this.matchedItems = [];
                this.searchedForItems = true;
            } else {
                MenuSearchService.getMatchedMenuItems(this.searchTerm)
                    .then((result) => {
                        this.matchedItems = result;
                        this.searchedForItems = true;
                    });
            }
        }

        this.removeItem = (itemIndex) => {
            this.matchedItems.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http']
    function MenuSearchService($http) {
        const service = this;

        service.getMatchedMenuItems = (searchTerm) => {
            return $http({
                method: "GET",
                url: ('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json')
            }).then((result) => {
                const matchedItems = [];
                for(let menuCategory in result.data) {
                    const items = result.data[menuCategory].menu_items;
                    matchedItems.push(...items.filter(x => x.description.includes(searchTerm)));
                }
                return matchedItems;
            });
        }
    }
    
})();
    