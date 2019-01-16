const bookshelf = require('../bookshelf');
const PlayerInfo = bookshelf.Model.extend({
  tableName: 'player_info',
});
module.exports = PlayerInfo;