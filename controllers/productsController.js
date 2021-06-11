//Type Import
const { getProductsModel } = require('../models/productsModel')
const { filterProducts } = require('./filters/filter')

module.exports = {
    //Controller that calls a proper model and handles errors if present
    getProductsController: (req, res) => {
        getProductsModel()
            .then(products => {
                let query = Object.assign({}, req.query) //Makign a copy
                
                return res.send(filterProducts(query, products))
                
            })
            .catch(err => {
                return res.sendStatus(503)
            })
    },
}