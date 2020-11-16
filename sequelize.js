const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3001

app.use('/', (req, res) => {
    res.send('HELL-O')
})
app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`)
})