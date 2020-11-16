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
    }
}

module.exports = controller