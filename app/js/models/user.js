/* User Model */

"use strict";

UserManagement.Models.User = Backbone.Model.extend({
  defaults: {
    name: null,
    email: null,
    city: null,
    color: null
  }
});