(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOffApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('PurchasedController', PurchasedController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        this.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

        this.purchaseItem = (item) => ShoppingListCheckOffService.purchaseItem(item);
    }

    PurchasedController.$inject = ['ShoppingListCheckOffService'];
    function PurchasedController(ShoppingListCheckOffService) {
        this.purchasedItems = ShoppingListCheckOffService.getPurchasedItems();

    }

    function ShoppingListCheckOffService() {
        const service = this;
        service.itemsToBuy = [
            {id: 1, name: 'Name of the Wind', quantity: 2},
            {id: 2, name: 'This Is How You Lose The Time Wars', quantity: 3},
            {id: 3, name: 'The Count of Monte Cristo', quantity: 1},
            {id: 4, name: '12oz Whole Bean Coffee', quantity: 4},
            {id: 5, name: 'Double Stuff Oreos', quantity: 1},
        ];
        service.purchasedItems = [];
        
        service.getItemsToBuy = () => {
            return service.itemsToBuy;
        }

        service.getPurchasedItems = () => {
            return service.purchasedItems;
        }

        service.purchaseItem = (item) => {
            const itemIndex = service.itemsToBuy.findIndex(x => x.id === item.id);
            service.itemsToBuy.splice(itemIndex, 1);
            service.purchasedItems.push(item);
        }
    }
    
    })();
    