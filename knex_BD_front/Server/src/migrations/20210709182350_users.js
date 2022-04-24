
exports.up = knex => knex.schema.createTable('users', table =>{
    table.increments('id')
    table.string('usuario').unique().notNullable()
    table.string('nome', 50).notNullable()
    table.string('sobrenome', 50).notNullable()
    table.string('nome_completo', 100).notNullable()
    table.string('telefone', 15).unique().notNullable()
    table.string('senha').notNullable()

    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('users')
