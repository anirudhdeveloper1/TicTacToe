const Game = require('./game.js');

var winners = new Array();

Game.find({"outcome" : "Win"}).exec(function(err,games){
   
   if(err) return err;
   
   games.forEach(function(game){
      console.log(game);
   });
});

