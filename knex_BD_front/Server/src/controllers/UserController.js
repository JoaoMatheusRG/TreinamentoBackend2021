const knex = require('../database');

module.exports = {
    async showUser(req, res){ 
    const { id } = req.body

    const results = await knex('users').where({id : id}).select()
        //console.log(JSON.parse(JSON.stringify(results)))
        return res.json(results)
    },
    async loginUser(req, res, next){
        try {
            // Pegar o usuario e senha da requisição
            const { usuario, senha } = req.body

            // Procurar no backend se existe ou não esse usuário e senha
            const checkbackend = await knex('users').where({usuario: usuario, senha: senha}).select()
            
            // Como o CheckBackend vai se tornar um Array(Lista) com o Objeto encontrado no backend
            if (checkbackend.length === 0) {

                const answer = {
                    connection: "failed"
                }

                return res.json(answer)
            }

            const answer = {
                connection: "successfully",
                id: checkbackend[0].id
            }

            return res.json(answer)

        } catch (error) {
            next(error)
        }
    },
    async createUser(req, res, next){
        try {
            const { usuario, nome, sobrenome, celular, senha } = await req.body
            
                const checkbackend = await knex('users')
                    .where({usuario: usuario, senha: senha}).first().select()

                    //const userId = JSON.parse(JSON.stringify(checkbackend)).id

                    if(checkbackend){
                        return res.send("Usuario ja existe")
                    }else{
                        const createuser = await knex('users').insert({
                            usuario: usuario,
                            nome: nome,
                            sobrenome: sobrenome,
                            telefone: celular,
                            senha: senha
                        })
                    }
                    // const createTask = await knex('tasks')
                    // .insert({
                    //     titulo: titulo,
                    //     descricao, descricao,
                    //     user_id: userId
                    // })


                return res.status(201).send()
            

        } catch (error) {
            next(error)
        }
    },
    async showUserTasks(req, res, next){
        const { id } = req.body
        
        const results = await knex('tasks').where({ user_id : id })

        return res.json(results)
    },
    async createTask(req, res, next){
        const { usuario, titulo, descricao} = req.body
        
        const checkbackend = await knex('users')
            .where({usuario: usuario}).first().select()

            const userId = JSON.parse(JSON.stringify(checkbackend)).id

            if(checkbackend){
                const createTask = await knex('tasks')
                    .insert({
                        titulo: titulo,
                        descricao, descricao,
                        user_id: userId
                    })

                return res.status(201).send()

            }else{
                res.status(404).send({error: 'Usuário inexistente'})
            }
    },
    async update(req, res, next){
        try {
            const { username } = req.body
            const { id } = req.params

            await knex('users')
            .update({username})
            .where({id})

            return res.send()


        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next){
        try {
            const { id } = req.params

            await knex('users')
            .where({ id })
            .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}