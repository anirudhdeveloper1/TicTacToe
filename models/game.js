const mongoose = require('mongoose');
const config = require('../config/database');
const winner = require('./winner');

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

game.moves.push(0,2,4,6,8);

if(winner.checkWin() == "Win")
{
   game.outcome = "Win";
};
   

console.log(game.outcome);

game.start = 'P1';


// game.save(function(err){
   
//    if(err) return err;
    
// });

