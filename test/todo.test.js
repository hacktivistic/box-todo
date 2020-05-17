
const request = require('supertest')

// Prepare application
const h = require('../box')
h.http.use(require('../routes/home'))

describe('Test Todo Application', () => {

    const app = h.http

    test('GET /', async () => {

        let resp = await request(app).get('/').expect(200)
        expect(resp.text).toMatch('Todo Public API v1.0')

    })

    test('GET /todo', async () => {

        let resp = await request(app).get('/todo').expect(200)
        expect(resp.body).toHaveLength(0)
        
    })

    test('POST /todo', async () => {

        let resp = await request(app).post('/todo').send({
            task: 'Grab some Oppai!'
        }).expect(200)
        
        expect(resp.body).toHaveProperty('id')
        
        expect(await (await request(app).get('/todo').expect(200)).body).toHaveLength(1)

    })

    test('GET /todo/:id', async () => {
        
        let resp = await request(app).post('/todo').send({
            task: 'Grab some Oppai!'
        }).expect(200)
        
        expect(resp.body).toHaveProperty('id')

        const todoId = resp.body.id

        resp = await request(app).get('/todo/' + todoId).expect(200)
        expect(resp.body[0].text).toBe('Grab some Oppai!')

    })

})