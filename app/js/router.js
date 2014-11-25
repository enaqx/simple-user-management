UserManagement.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'users': 'showUsers',
    'users/new': 'newUser',
    'users/edit/:id': 'editUser',

    'projects': 'showProjects',
    'project/new': 'newProject',
    'project/edit/:id': 'editProject',
  }
});
