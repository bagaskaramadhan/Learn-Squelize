const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const { PORT } = require('./src/helpers/env')

app.use('/', (req, res) => {
    res.send('HELL-O')
})
app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`)
})