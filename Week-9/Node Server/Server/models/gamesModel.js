const bookshelf = require('../bookshelf');
const Gamesinfo = bookshelf.Model.extend({
  tableName: 'games',
});
module.exports = Gamesinfo;