const express = require('express');
//const router = express.Router();
const app = express();

app.use(express.bodyParser());

const game = require('./models/game'); 


app.get('/trackmove',function(req,res){
   //console.log(req.body.arr[0]);
   console.log(req.query.array);
   res.json({"foo": "bar"});
   //res.send('WEEEE');
    
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


