UserManagement.Views.Projects = Backbone.View.extend({
  template: _.template($('#tpl-projects').html()),

  renderOne: function(project) {
    var itemView = new UserManagement.Views.Project({model: project});
    this.$('.projects-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
    this.collection.each(this.renderOne, this);
    return this;
  }
});