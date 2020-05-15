/**
 * Box Setup
 */

const { Container } = require('@haluka/box')
const express = require('express')

const h = new Container()

// Registations
h.singleton('http', function () {
    const e = express()
    // e.use(express.urlencoded())
    e.use(express.json())
    return e
})

// Expose Container in HTTP
h.http.use((req, res, next) => {
    req.box = h
    next()
})

const Database = require('./app/Database')
h.singleton('Database', Database)
h.alias('db', 'Database')

const Todo = require('./app/Todo')
h.register({
    provider: 'Todo',
    content: Todo,
    opts: {
        User: {
            id: 1,
            name: "Monkey D Luddy",
            age: 19
        }
    }
})

exports = module.exports = h