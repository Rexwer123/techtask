//Dependencies
const express = require('express')

//Using a seperate configuration file for better scalability
const serverConfig = require('./config/serverConfig')
const router = require('./routes/indexRoute')

//Creating an application instance of type <Application>
const app = express()

//Setting up requests/responses parsers
app.use(express.json())
app.use(express.urlencoded())

//Connecting our router
app.use('/', router)

//Setting up a listener
app.listen(serverConfig.port, () => {
    console.clear()
    console.log(`[OK] Server running on port ${serverConfig.port}`)
})