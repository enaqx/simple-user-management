UserManagement.Models.Project = Backbone.Model.extend({
  defaults: {
    name: null,
    description: null,
    status: null,
    assignedUsers: null
  }
});
