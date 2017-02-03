module.exports = function (knex) {

  return {

    displayAllUsers: function (users) {
      return knex('user')
      .select('*')
    },

    findUsers: function() {
      return knex('user')
      .select('*')
    },

    findUserByName: function(name) {
      return knex ('user')
      .where ('user.name', name)
    },

    listZoneData: function() {
      return knex('zone')
      .select('*')
    },

    addNewUserToTable: function(newUser) {
      return knex('user')
      .insert(newUser)
      .then(function(ids) {
  			return knex('user')
  			.select('name', 'id')
  			.where ({id: ids[0]})
        })
    }
  }
}
