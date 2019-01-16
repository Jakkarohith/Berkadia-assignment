const express = require('express');
const GamesInfo = require('../models/gamesModel');
const router = express.Router();
router.get('/',(req,res)=>
{
      GamesInfo
          .fetchAll()
          .then(function(games) {
            res.json({ games });
      });
});
  
module.exports = router;
