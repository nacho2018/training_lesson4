(function () {
'use strict';

angular.module('myApp')
.service('MyService', MyService);


MyService.$inject = ['$q', '$timeout'];
function MyService($q, $timeout) {
  var service = this;

  //service.getMyData = function (param) {
  service.getMyData = function (param) {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function (param) {
      if (param){
        deferred.resolve('This is data2');
      }

      else{
      deferred.reject('Error, no param was received!');
      }


    }, 800);

    return deferred.promise;
  };
}

})();
