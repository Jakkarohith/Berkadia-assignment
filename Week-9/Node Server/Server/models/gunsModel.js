const bookshelf = require('../bookshelf');
const GunsInfo = bookshelf.Model.extend({
  tableName: 'guns',
});
module.exports = GunsInfo;