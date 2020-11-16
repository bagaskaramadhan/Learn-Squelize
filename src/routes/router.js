const express = require('express')
const router = express.Router()
const controller = require('../controllers/book')
router
    .get('/book', controller.getAll)

module.exports = router