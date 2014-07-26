Router.map(function() {
  this.route('CouldDosPage', {
    path: '/:group_id',
    data: function() {
      return {
        group_id: this.params.group_id,
        could_dos: CouldDos.find({ group_id: this.params.group_id }).fetch()
      };
    }
  });
  this.route('Start', { path: '/' });
  this.route('ApathyPage', { 
    path: '/:group_id/total_apathy',
    data: function() {
      var could_dos = CouldDos.find({ group_id: this.params.group_id }).fetch();
      var maybe = could_dos[Math.floor(Math.random()*could_dos.length)];
      return {
        maybe: maybe,
        group_id: this.params.group_id
      };
    }
  })
});
