const express = require('express');


const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.post('/user', UserController.showUser)
// routes.get('/task', UserController.showTask)
routes.post('/users', UserController.createUser)
routes.post('/task', UserController.createTask)
//routes.put('/users/:id', UserController.update)
//routes.delete('/users/:id', UserController.delete)
routes.post('/login_user', UserController.loginUser)
routes.post("/tasks_from_user", UserController.showUserTasks)


module.exports = routes
