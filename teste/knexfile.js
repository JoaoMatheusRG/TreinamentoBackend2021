// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      user : 'root',
      password : 'root',
      database : 'serra_junior_engenharia'
    },
    migrations: {
      tableName: 'migrations_table',
      directory: `${__dirname}/src/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/seeds`
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
