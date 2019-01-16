const express = require('express');
const PlayerInfo = require('../models/playerModel');
const router = express.Router();
router.get('/:id',(req,res)=>
{
    PlayerInfo
          .where('game_id', req.params.id)
          .fetchAll()
          .then(function(players) {
            res.json({ players });
      });
});
  
module.exports = router;
