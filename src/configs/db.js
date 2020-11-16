const { DATABASE, USER, HOST, PASSWORD, DIALECT } = require('../helpers/env')
const Sequelize = require('sequelize')
module.exports = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,


    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})