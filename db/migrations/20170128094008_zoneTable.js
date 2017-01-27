
exports.up = function(knex, Promise) {
  return knex.schema.createTable('zone', function (t) {
    t.increments('id');
    t.string('name');
    t.string('aspect');
    t.string('soil');
    t.string('landscape');
    t.string('exposure');
    t.string('access');
    t.string('weed_control');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('zone')
};
