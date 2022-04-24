
exports.up = knex => knex.schema.createTable('tasks', table => {
    table.increments('id')
    table.string('titulo').notNullable()
    table.string('descricao').notNullable()

    //relacionamento
    table.integer('user_id').unsigned()

    table.foreign('user_id').references('id').inTable('users')
        

    table.timestamps(true, true)
})


exports.down =  knex => knex.schema.dropTable('tasks')
