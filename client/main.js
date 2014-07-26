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
