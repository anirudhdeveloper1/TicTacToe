const mongoose = require('mongoose');
const config = require('../config/database');
const winner = require('./winner');

var recordGame = function(){
const gameSchema = mongoose.Schema({
   
   start: {type:String},
   moves: [],
   outcome:{
       type:String
   }
});



var connection = mongoose.createConnection(config.database);

const Game = module.exports = connection.model('Game',gameSchema);

var game = new Game;

var gameArray = Array.from(arguments);

gameArray = gameArray.map(Number);

Array.prototype.push.apply(game.moves, gameArray);
game.outcome = "Win";
game.start = 'P1';

// if(winner.checkWin() == "Win")
// {
//    game.outcome = "Win";
// };
   
var isSuccess = true;

console.log(game.moves);

   game.save(function(err){
      
      if(err) return err;
       
   });
   
   return isSuccess;
};

exports.recordGame = recordGame;

