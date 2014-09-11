Template.NewCouldDo.events({'submit form': function(e, tmpl) {
    e.preventDefault();

    var maybe = tmpl.find('input[name="maybe"]').value;
    CouldDos.insert({
      maybe: maybe,
      group_id: this.group_id,
      user_id: Meteor.userId()
    });

    e.target.reset();
  }
});
