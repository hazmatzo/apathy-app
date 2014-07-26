CouldDos = new Meteor.Collection("could_dos");

if (Meteor.isClient) {
  Template.NewCouldDo.events({
    'submit form': function(e, tmpl) {
      e.preventDefault();

      var maybe = tmpl.find('input[name="maybe"]').value;

      CouldDos.insert({
        maybe: maybe
      });

      e.target.reset();
    }
  });

  Template.CouldDos.helpers({
    could_dos: function() {
      return CouldDos.find().fetch();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
