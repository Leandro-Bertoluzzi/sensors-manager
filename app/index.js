'use strict';

const express = require('express');
var db = require('mysql');
const config = require('./config');

// Constants
const PORT = config.PORT;
const HOST = config.HOST;

// ******************** App ******************** //

// Home
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Get DB data
var responseStr = "MySQL Data:";

app.get('/db',function(req,res){
   
   var dbHost = config.DB_HOST;
   var dbPort = config.DB_PORT;
   var dbUser = config.DB_USER;
   var dbPass = config.DB_PASS;
   var dbName   = config.DB_NAME;

   var connectionOptions = {
     host: dbHost,
     port: dbPort,
     user: dbUser,
     password: dbPass,
     database: dbName
   };

   console.log('MySQL Connection config:');
   console.log(connectionOptions);

   var connection = db.createConnection(connectionOptions);
   var queryStr = 'SELECT * FROM TESTING_ITEM_TABLE';
   
   connection.connect();
 
   connection.query(queryStr, function (error, results, fields) {
     if (error) throw error;
     
     responseStr = '';

     results.forEach(function(data){
        responseStr += data.ITEM_NAME + ' : ';
        console.log(data);
     });

     if(responseStr.length == 0)
        responseStr = 'No records found';

     console.log(responseStr);

     res.status(200).send(responseStr);
   });
    
   connection.end();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);