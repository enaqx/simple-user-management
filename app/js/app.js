window.UserManagement = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var users = new UserManagement.Collections.Users(data.users);
    var router = new UserManagement.Router();

    router.on('route:home', function() {
      router.navigate('users', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showUsers', function() {
      var usersView = new UserManagement.Views.Users({
        collection: users
      });

      $('.main-container').html(usersView.render().$el);
    });

    router.on('route:newUser', function() {
      var newUserForm = new UserManagement.Views.UserForm({
        model: new UserManagement.Models.User()
      });

      newUserForm.on('form:submitted', function(attrs) {
        attrs.id = users.isEmpty() ? 1 : (_.max(users.pluck('id')) + 1);
        users.add(attrs);
        router.navigate('users', true);
      });

      $('.main-container').html(newUserForm.render().$el);
    });

    router.on('route:editUser', function(id) {
      var user = users.get(id);
      var editUserForm;

      if (user) {
        editUserForm = new UserManagement.Views.UserForm({
          model: user
        });

        editUserForm.on('form:submitted', function(attrs) {
          user.set(attrs);
          router.navigate('users', true);
        });

        $('.main-container').html(editUserForm.render().$el);
      } else {
        router.navigate('users', true);
      }
    });

    Backbone.history.start();
  }
};
