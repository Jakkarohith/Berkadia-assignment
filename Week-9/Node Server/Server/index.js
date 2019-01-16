const express = require('express');
const bodyParser = require('body-parser');
const gamesinforoute = require('./routes/gameinfo');
const playersinforoute = require('./routes/playersinfo');
const pubggunsinforoute = require('./routes/pubggunsinfo');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/games', gamesinforoute);
app.use('/players',playersinforoute);
app.use('/pubgguns',pubggunsinforoute);
app.listen(PORT, function() {
  console.log('Server running on ', PORT);
});