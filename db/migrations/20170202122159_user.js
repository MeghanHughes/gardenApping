
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function (t) {
    t.increments('id');
    t.string('name');
    t.string('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
