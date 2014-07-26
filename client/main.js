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
  this.route('DecisionPage', { 
    path: '/:group_id/decision',
    data: function() {
      var could_dos = CouldDos.find({ group_id: this.params.group_id }).fetch();
      console.log("after could_dos");
      return {
        could_dos: could_dos,
        group_id: this.params.group_id
      };
    }
  })
});
