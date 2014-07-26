CouldDos = new Meteor.Collection("could_dos");

if (Meteor.isClient) {
  Router.map(function() {
    this.route('CouldDosPage', {
      path: '/:id',
      data: function() {
        return {
          group_id: this.params.id,
          could_dos: CouldDos.find({ group_id: this.params.id }).fetch()
        };
      }
    });
    this.route('Start', { path: '/' });
  });

  Template.Start.helpers({
    apathy_session_path: function() {
      return "/lkjhdfiuhadfg";
    }
  });

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

  Template.CouldDos.helpers({
    could_dos: function() {
      return this.could_dos;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
