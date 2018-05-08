const express = require('express');
//const router = express.Router();
const game = require('./models/game'); 
const winner = require('./models/winner');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/trackmove',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var isWin = winner.checkWin.apply(this,req.body.array);

    res.send(isWin);

});

app.post('/recordgame',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var isSuccess = game.recordGame.apply(this,req.body.array);

    res.send(isSuccess);

});



const port =  8081;

app.get('/', function(req, res){
     console.log(req.query.array);
  res.status(200).send('Hello');
});

app.listen(port,() =>{
    console.log('Server started on port ' + port);
});

module.exports = app;


