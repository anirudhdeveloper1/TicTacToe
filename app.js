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
   
   console.log(req.body);

  console.log(req.body.array[0]);
  
  var test = req.body.array;
  var test1 = [];
    
    let ar = test.map(item => item);
    console.log(ar);

   
    winner.checkWin.apply(this,ar);
   
   
   res.json({foo: "bar"});

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


