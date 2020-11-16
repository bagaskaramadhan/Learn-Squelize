require('dotenv').config()

module.exports = {
    PORTO: process.env.PORT,
    DATABASE: process.env.DBNAME,
    USER: process.env.DBUSER,
    HOST: process.env.DBHOST,
    PASSWORD: process.env.DBPASS,
    DIALECT: process.env.DBDIALECT,
    TB: process.env.TABLEB
}