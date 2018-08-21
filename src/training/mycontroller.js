(function(){

  angular.module('myApp')
  .controller('MyController', MyController);

  MyController.$inject = ['data1', 'data2'];
  function MyController(data1, data2){

    console.log('data1 ', data1);
    console.log('data2 ', data2);

    var myCtrl = this;
    myCtrl.data1 = data1;
    myCtrl.data2 = data2;


  }
})();
