Template.DecisionPage.helpers({
  maybe: function() {
  	console.log("in maybe");
    var maybe = this.could_dos[Math.floor(Math.random()*this.could_dos.length)];
    console.log("maybe", maybe, this.could_dos);
    return maybe.maybe;
  }
});