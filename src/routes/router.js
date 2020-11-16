const express = require('express')
const router = express.Router()
const db = require('../configs/db')
const book = require('../models/book')
router
    .get('/book', (req, res) =>
        book.findAll()
        .then(result => {
            console.log(result)
            res.sendStatus(200)
        })
        .catch(err => console.log(err)))

module.exports = router