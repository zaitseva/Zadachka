'use strict';

// Register usersList component, along with its associated controller and template
angular.
  module('usersList').
  component('usersList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['User',
      function UserListController(User) {
        this.users = User.query();
        this.orderProp = 'Name';
      }
    ]
  });
