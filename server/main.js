Meteor.startup(function () {
  Meteor.publish('could_dos', function(group_id) {
    return CouldDos.find({ group_id: group_id });
  });
});
