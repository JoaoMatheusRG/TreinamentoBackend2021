
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Joao matheus'}, 
        {username: 'Guilherme'},
        {username: 'Julya'},
        {username: 'Thiago'},
      ]);
    });
};
