const express = require('express')
const router = express.Router()
const { getAll, getOne, insert } = require('../controllers/book')
router
    .get('/book', getAll)
    .get('/detail/:id', getOne)
    .post('/insert', insert)

module.exports = router