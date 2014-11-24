/* Add/Edit User Form View */

"use strict";

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ )
    color += letters[Math.floor(Math.random() * 16)];
  return color;
}

UserManagement.Views.UserForm = Backbone.View.extend({
  template: _.template($('#tpl-new-user').html()),

  events: {
    'submit .user-form': 'onFormSubmit'
  },

  render: function() {
    var html = this.template(_.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    }));
    this.$el.append(html);
    return this;
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    this.trigger('form:submitted', {
      name: this.$('.user-name-input').val(),
      email: this.$('.user-email-input').val(),
      city: this.$('.user-city-input').val(),
      color: getRandomColor()
    });
  }
});
