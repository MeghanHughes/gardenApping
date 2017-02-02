module.exports = function (knex) {

  return {
    findAll: function (table, options) {
      return knex(table)
      .select()
    },

    findUsers: function () {
      return knex('user')
      .select('*')
    },

    listZoneData: function() {
      return knex('zone')
      .select('*')
    },
  }
}
