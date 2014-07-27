Template.DecisionPage.helpers({
  maybe: function() {
  	console.log("in maybe");
    var maybe = this.could_dos[Math.floor(Math.random()*this.could_dos.length)];
    console.log("maybe", maybe, this.could_dos);
    return maybe.maybe;
  },

  apathy: function() {
    var apathy = apathyData[Math.floor(Math.random()*apathyData.length)];
    return apathy.apathyMessage;
  }
});

var apathyData = [ 
  {
    apathyMessage: "... or just stay home and watch Game of Thrones."
  },
  {
    apathyMessage: "... or just sleep now, avoid the rush."
  },
  {
    apathyMessage: "Remember, there's a lot do out there... why don't you sleep?"
  },
  {
    apathyMessage: "... or you could put on pajamas and call it a day."
  },
  {
    apathyMessage: "... or you could just watch Orange is the New Black."
  }
]