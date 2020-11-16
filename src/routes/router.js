const express = require('express')
const router = express.Router()
const { getAll, getOne, insert, deleted } = require('../controllers/book')
router
    .get('/book', getAll)
    .get('/detail/:id', getOne)
    .post('/insert', insert)
    .delete('/destroy/:id', deleted)

module.exports = router