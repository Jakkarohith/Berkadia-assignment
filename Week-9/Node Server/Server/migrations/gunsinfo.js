exports.up = function(knex) {
    return knex.schema
      .createTable('guns', function(table) {
        table.string('gun_name');
        table.string('gun_type');
        table.string('gun_ammo');
        table.increments('damge');
        table.increments('magazine_capacity');
        table.string('range');
        table.increments('bullet_speed');
        table.string('fire_rate');
        table.string('Tier');
        table.string('gun_image');
      });
  };
  exports.down = function(knex) {
    return knex.schema
      .dropTable('guns');
  };