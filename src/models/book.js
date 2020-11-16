const Sequelize = require('sequelize')
const db = require('../configs/db')
const { TB } = require('../helpers/env')

const book = db.define(TB, {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    stock: {
        type: Sequelize.INTEGER
    }
})

module.exports = book