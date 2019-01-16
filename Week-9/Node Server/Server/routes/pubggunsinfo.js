const express = require('express');
const GunsInfo = require('../models/gunsModel');
const router = express.Router();
router.get('/',(req,res)=>
{
     GunsInfo
          .fetchAll()
          .then(function(guns) {
            res.json({ guns });
      });
});
  
module.exports = router;
