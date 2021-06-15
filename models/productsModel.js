const APIConfig = require('../config/APIConfig')
const axios = require('axios')

module.exports = {
    //Makes an async request to the API and returns a promise to be able to use then/catch in controller for error handling and proper responses
    getProductsModel: () => {
        return axios.get(APIConfig.productsEndpoint)
                .then(res => {
                    if(res.data.products !== undefined && res.data.products !== null){
                        return res.data.products
                    }
                })
                .catch(err => {
                    return err
                })
    }
}
