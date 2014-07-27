Template.DecisionPage.helpers({
  maybe: function() {
    var maybe = this.could_dos[Math.floor(Math.random()*this.could_dos.length)];
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
  }, 

  {
  	apathyMessage: "... but face it, you don't have the energy to do that right now anyway. If you did, you wouldn't be on this app."
  },

  {
  	apathyMessage: "... or you could just google baby kittens."
  },

  {
  	apathyMessage: "... but really, what are you, some sort of wizard? Just read the Internet! FOREVER!"
  }
]
