const model = require('../models/book')

const controller = {
    getAll: (req, res) => {
        model.findAll()
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    getOne: (req, res) => {
        const id = req.params.id
        model.findByPk(id)
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    insert: (req, res) => {
        const data = req.body
        model.create(data)
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = controller