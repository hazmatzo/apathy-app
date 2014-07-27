Router.map(function() {
  this.route('CouldDosPage', {
    path: '/:group_id',
    waitOn: function() {
      return Meteor.subscribe('could_dos', this.params.group_id);
    },
    data: function() {
      return {
        group_id: this.params.group_id,
        could_dos: CouldDos.find().fetch()
      };
    }
  });

  this.route('Start', { path: '/' });

  this.route('MyCouldDosPage', {
    path: '/my-could-dos',
    waitOn: function() {
      return Meteor.subscribe('user_could_dos', Meteor.userId());
    },
    action: function() {
      this.ready() ? this.render() : this.render('loading');
    },
    data: function() {
      return {
        could_dos: CouldDos.find().fetch()
      };
    }
  })

  this.route('DecisionPage', {
    path: '/:group_id/decision',
    waitOn: function() {
      return Meteor.subscribe('could_dos', this.params.group_id);
    },
    action: function() {
      this.ready() ? this.render() : this.render('loading');
    },
    data: function() {
      return {
        group_id: this.params.group_id,
        could_dos: CouldDos.find().fetch()
      };
    }
  })
});
