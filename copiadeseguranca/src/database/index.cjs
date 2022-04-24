const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'root',
      database : 'serra_junior_engenharia'
    },
    migrations: {
        tableName: 'knex_migrations',
      }
  });


module.exports = knex;