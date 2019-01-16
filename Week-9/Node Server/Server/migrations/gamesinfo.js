exports.up = function(knex) {
    return knex.schema
      .createTable('games', function(table) {
        table.increments('game_id').primary();
        table.string('game_name');
        table.string('game_image');
        table.string('game_release_year');
      });
  };
  exports.down = function(knex) {
    return knex.schema
      .dropTable('games');
  };