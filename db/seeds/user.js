
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user').insert({id: 1, name: 'Meghan', password: 'Starbuck', isAdmin: false}),
        knex('user').insert({id: 2, name: 'Gareth', password: 'Churchill', isAdmin: false}),,
        knex('user').insert({id: 3, name: 'Arlo', password: 'Eragon', isAdmin: false}),
        knex('user').insert({id: 4, name: 'Zoe', password: 'Pippi', isAdmin: true})
      ]);
    });
};
