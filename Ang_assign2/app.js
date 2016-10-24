(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var buy = this;


  buy.itemName = "";
  buy.itemQuantity = "";



buy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();



buy.copyItem = function(indexItem){
  ShoppingListCheckOffService.copyItem(indexItem);
}
buy.removeItem = function(itemIndex){

    ShoppingListCheckOffService.removeItem(itemIndex);

}





}
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
   var bought = this;


   bought.itemName = "";
   bought.itemQuantity = "";

bought.announce =  ShoppingListCheckOffService.checkBoughtString();

   bought.getBoughtItems = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // Array of shopping items
  var toBuyItems = [];
      toBuyItems.push({name:"cookies", quantity:10});
      toBuyItems.push({name:"chips", quantity:5});
      toBuyItems.push({name:"sugary drinks", quantity:7});
      toBuyItems.push({name:"pepto-bismo", quantity:4});
      toBuyItems.push({name:"blue cheese",quantity:2});

  var counter=0;
  var boughtString = "There's more!!";

  var boughtItems = [];

  service.copyItem = function (indexItem){
    var item = toBuyItems[indexItem];
    boughtItems.push(item);
    var pos = boughtItems.length;
    console.log(boughtItems[pos-1]);

  };




  service.removeItem = function (itemIndex){

    toBuyItems.splice(itemIndex, 1);



  }

  service.getToBuyItems = function () {
    return toBuyItems;
  }
  service.getBoughtItems = function (){

    return boughtItems;
  }
    //changing announcement about state
  service.checkBoughtString = function(){



  if(toBuyItems.length ==0){
        boughtString = "All is bought!! " +toBuyItems.length ;

        }
      else {boughtString = "There's more to buy!! " +toBuyItems.length;
        }



      console.log(boughtString, " , array length = "+toBuyItems.length);



      return boughtString;

      }
  }

})();
