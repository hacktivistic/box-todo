/**
 * Todo App with Boxa-Express
 */

const h = require('./box')

// Setup Routes
h.http.use('/', require('./routes/home'))

// Boostrap HTTP Server
h.http.listen(3000, () => {
    console.log('Started Listening on :3000')
})