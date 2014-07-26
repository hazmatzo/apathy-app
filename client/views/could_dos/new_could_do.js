Template.NewCouldDo.events({
  'submit form': function(e, tmpl) {
    e.preventDefault();

    var maybe = tmpl.find('input[name="maybe"]').value;

    CouldDos.insert({
      maybe: maybe,
      group_id: this.group_id
    });

    e.target.reset();
  }
});
