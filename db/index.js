module.exports = function (knex) {

  return {
    findAll: function (table, options) {
      return knex(table)
      .select()
    },
  }

  // addUser: function (table, input) {
  // 	const formattedData = {
  // 		name: input.userName,
  // 		password: input.password,
  // 		email: input.email
  // 	}
  // 	return knex(table)
  //   	.insert(formattedData)
  //   	.then(function(ids) {
  //     	return knex(table)
  //     	.select('name', 'id')
  //     	.where ({id: ids[0]})
  // 	   })
  // },
  //
  // findUserByEmail: function (email) {
  // 	return knex('user')
  // 		.select()
  // 		.where('email', email)
  // }
  //

  // findById: function (table, id) {
  //   return knex(table)
  //     .select()
  //     .then((rows) => rows[0])
  // }

}
