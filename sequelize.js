const express = require('express')
const bodyParser = require('body-parser')
// const path = require('path')
const { PORTO } = require('./src/helpers/env')
const PORT = PORTO || 5000
const db = require('./src/configs/db')
const router = require('./src/routes/router')

db.authenticate()
    .then(() => console.log(`Database Connect`))
    .catch(err => console.log('Error ' + err))

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api', router)
app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`)
})