const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () =>{
    console.log('Connected to database '+config.database);
});

mongoose.connection.on('error', (err) =>{
    console.log('Database error '+err);
});