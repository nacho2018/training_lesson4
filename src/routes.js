(function () {
'use strict';

angular.module('myApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.html'
  })

  .state('myState', {
     url : '/myState/{myParam}',
    templateUrl : 'src/templates/mystate.html',
    controller : 'MyController as myCtrl',
    resolve : {
      data1 : 'This is data1',
      data2 : ['$stateParams','MyService', function($stateParams, MyService){
        return MyService.getMyData($stateParams.myParam)
        .then(function(data){
          return data;
        })
        .catch(function(error){
          console.log(error);
          return error;
        });
      }]
    }
  });
}

})();
