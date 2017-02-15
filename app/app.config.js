'use strict';

angular.
  module('userscatApp').
  config(['$locationProvider' ,'$compileProvider','$routeProvider',
    function config( $locationProvider, $compileProvider, $routeProvider) {
    
			$locationProvider.hashPrefix('!');
			$compileProvider.debugInfoEnabled(false);

			
      $routeProvider.
        when('/', {
          template: '<home-page></home-page>'
        }).
        when('/users', {
          template: '<users-list></users-list>'
        }).
        otherwise('/');
    }
  ]);
