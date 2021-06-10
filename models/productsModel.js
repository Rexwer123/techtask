const APIConfig = require('../config/APIConfig')
const request = require('request')

module.exports = {
    //Makes an async request to the API and returns a promise to be able to use then/catch in controller for error handling and proper responses
    getProductsModel: () => {
        return new Promise((resolve, reject) => {
            request(APIConfig.productsEndpoint, {json: true}, (error, response, body) => {
                if(error){
                    return reject(error)
                }
                return resolve(body.products)
            })
        })
    }
}
