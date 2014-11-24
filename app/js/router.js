UserManagement.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'users': 'showUsers',
    'users/new': 'newUser',
    'users/edit/:id': 'editUser'
  }
});
