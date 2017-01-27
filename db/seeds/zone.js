
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zone').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('zone').insert({
          id: 1,
          name: 'Patio',
          aspect: 'East',
          soil: 'Good',
          landscape: 'Planterbox',
          exposure: 'Sheltered',
          access: 'Easy',
          weed_control: 'Under control'
        }),
        knex('zone').insert({
          id: 2,
          name: 'Back of house (kitchen)',
          aspect: 'South',
          soil: 'Improving',
          landscape: 'Planterbox',
          exposure: 'Sheltered',
          access: 'Easy',
          weed_control: 'Under control'
        }),
        knex('zone').insert({
          id: 3,
          name: 'Side of house (bathroom)',
          aspect: 'West',
          soil: 'Improving',
          landscape: 'Flat',
          exposure: 'Sheltered',
          access: 'Easy',
          weed_control: 'Under control'
        })
      ]);
    });
};
