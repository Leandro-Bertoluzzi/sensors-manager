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

  var connection = db.createConnection(connectionOptions);
  var queryStr = 'SELECT * FROM TESTING_ITEM_TABLE';

  connection.connect();

  connection.query(queryStr, function (error, results, fields) {
    var jsonArray;
    if (error){
      var jsonArray = JSON.parse(JSON.stringify({ error: "DB table not found" }));
      res.status(500).json(jsonArray);
    } else {
      jsonArray = JSON.parse(JSON.stringify(results));
      res.status(200).json(jsonArray);
    }
  });

  connection.end();
});

// JSON test
app.use(express.json());  // The middleware json allows to decode the json request body
    
app.post('/json', function (req, res) {
  console.log(req.body.name);
  res.status(200).json({ yourName: req.body.name });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);