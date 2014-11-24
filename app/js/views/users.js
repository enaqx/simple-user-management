UserManagement.Views.Users = Backbone.View.extend({
  template: _.template($('#tpl-users').html()),

  renderOne: function(user) {
    var itemView = new UserManagement.Views.User({model: user});
    this.$('.users-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
    this.collection.each(this.renderOne, this);
    return this;
  }
});
