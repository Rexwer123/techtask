const express = require('express')
const { getProductsController } = require('../controllers/productsController')

const router = express.Router()

router.route('/filter?').get(getProductsController)

module.exports = router