const metaCollector = require("../../../controllers/meta/metaCollector")
const { getProductsModel } = require("../../../models/productsModel")
const { filterProducts } = require("../../../controllers/filters/filter")


describe("Testing API-response filter", () => {
    //Storing the result of pre-test request to API
    let resultPriceFiltered
    let resultSizeFiltered
    let resultSizeFilteredByAll
     

    beforeAll(async () => {
        APIResponse = await getProductsModel()
        resultPriceFiltered = filterProducts({maxprice: 10}, APIResponse)
        resultSizeFiltered = filterProducts({size: 'large'}, APIResponse)
        resultsFilteredByAll = filterProducts({maxprice: 10, size: 'large'}, APIResponse)
    })

    it("Filter returns an object with required attributes", () => {
        expect(resultPriceFiltered).toBeInstanceOf(Object)
        expect(resultPriceFiltered).toHaveProperty("productsRaw")
        expect(resultPriceFiltered).toHaveProperty("products")
        expect(resultPriceFiltered).toHaveProperty("maxPrice")
        expect(resultPriceFiltered).toHaveProperty("minPrice")
        expect(resultPriceFiltered).toHaveProperty("sizes")
        expect(resultPriceFiltered).toHaveProperty("popularWords")
        expect(resultPriceFiltered.popularWords.length === 10).toBe(true)
    })

    it("Filters by price", () => {
        let flag = true
        resultPriceFiltered.products.forEach(item => {
            if(item.price > 10){
                flag = false
            }
        })
        expect(flag).toBe(true)
    })

    it("Filters by size", () => {
        let flag = true
        resultSizeFiltered.products.forEach(item => {
            if(!item.sizes.includes('large')){
                let flag = false
            }
        })
        expect(flag).toBe(true)
    })

    it("Object Successfully filters by all parameters", () => {
        let flag = true
        resultSizeFiltered.products.forEach(item => {
            if(!item.sizes.includes('large') && item.price > 10){
                let flag = false
            }
        })
        expect(flag).toBe(true)
    })

    afterAll(done => {
        done()
    })
})