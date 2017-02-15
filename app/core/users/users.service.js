'use strict';

angular.
  module('core.user').
  factory('User', ['$resource',
    function($resource) {
      return $resource('http://95.213.194.131:8543/', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: true
        }
      });
    }
  ]);
