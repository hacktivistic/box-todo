/**
 * Home Route
 */

const Router = require('express').Router()

Router.get('/', (req, res) => {
    res.end('Todo Public API v1.0')
})


Router.get('/todo', (req, res) => {
    
    const todos = req.box.Todo
    res.json(todos.retrieve())

})

Router.post('/todo', (req, res) => {
    
    res.json(req.box.Todo.create(req.body.task))

})

Router.get('/todo/:id', (req, res) => {

    res.json(req.box.Todo.retrieve({
        id: req.params.id 
    }))

})


module.exports = Router