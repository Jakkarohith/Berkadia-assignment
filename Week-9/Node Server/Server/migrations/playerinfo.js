exports.up = function(knex) {
    return knex.schema
      .createTable('player_info', function(table) {
        table.increments('player_id').primary();
        table.increments('game_id');
        table.string('player_name');
        table.increments('player_rank');
      });
  };
  exports.down = function(knex) {
    return knex.schema
      .dropTable('player_info');
  };