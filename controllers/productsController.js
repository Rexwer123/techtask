//Type Import
const { getProductsModel } = require('../models/productsModel')
const { filterProducts } = require('./filters/filter')

module.exports = {
    //Controller that calls a proper model and handles errors if present
    getProductsController: (req, res) => {
        getProductsModel()
            .then(products => {
                if(req.query.highlight){ //if a highlight filter is present - do a conversion into an array
                    req.query.highlight = req.query.highlight.split(',') //highlight parameter can have multiple values, but is stored as string - converting into array
                } 
                return res.send(filterProducts(req.query, products))
                
            })
            .catch(err => {
                return res.sendStatus(503)
            })
    },
}