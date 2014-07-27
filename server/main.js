Meteor.startup(function () {
  Meteor.publish('could_dos', function(group_id) {
    return CouldDos.find({ group_id: group_id });
  });

  Meteor.publish('user_could_dos', function(user_id) {
    return CouldDos.find({ user_id: user_id });
  });
});
