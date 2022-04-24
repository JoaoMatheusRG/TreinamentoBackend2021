exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username').unique().notNullable()

    table.timestamps(true, true)
})


exports.down =  knex => knex.schema.dropTable('users')
