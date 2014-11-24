UserManagement.Views.User = Backbone.View.extend({
  tagName: 'li',
  className: 'media col-md-12 col-lg-12',
  template: _.template($('#tpl-user').html()),

  events: {
    'click .delete-user': 'onClickDelete'
  },

  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  onClickDelete: function(e) {
    e.preventDefault();
    this.model.collection.remove(this.model);
  }
});