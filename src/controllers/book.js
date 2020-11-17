const model = require('../models/book')
const { Success, Failed } = require('../helpers/response')

const controller = {
    getAll: (req, res) => {
        model.findAll()
            .then((result) => {
                Success(res, result, 'Success Get All Data')
            })
            .catch(err => {
                console.log(err)
            })
    },
    getOne: (req, res) => {
        const id = req.params.id
        model.findByPk(id)
            .then((result) => {
                Success(res, result, 'Success Get Data By Id')
            })
            .catch(err => {
                console.log(err)
            })
    },
    insert: (req, res) => {
        const data = {
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            stock: req.body.stock
        }
        if (!data) {
            console.log('Error')
        } else {
            model.create(data)
                .then((result) => {
                    Success(res, result, 'Success Insert Data')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    deleted: (req, res) => {
        const id = req.params.id
        model.destroy({
            where: { id }
        })
            .then((result) => {
                Success(res, result, 'Success Delete Data')
            })
            .catch(err => {
                console.log(err)
            })
    },
    updated: (req, res) => {
        const id = req.params.id
        const data = {
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            stock: req.body.stock
        }
        model.update(data, { where: { id } })
            .then(() => {
                Success(res, data, 'Success Update Data')
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = controller