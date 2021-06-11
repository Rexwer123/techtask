const metaCollector = require("../../../controllers/meta/metaCollector")
const { getProductsModel } = require("../../../models/productsModel")



describe("Testing meta-data collector", () => {
    let products = [
            {
                name: 'Trousers',
                sizes: ['large', 'small'],
                price: 30,
                description: 'Cool blue trousers with an awesome belt'
            },
            {
                name: 'T-Shirt',
                sizes: ['small'],
                price: 10,
                description: 'Nice blue t-shirt comes with a cool print'
            },
            {
                name: 'Sneakers',
                sizes: ['large', 'small'],
                price: 10,
                description: 'Cool green trousers with colorful laces'
            },
            {
                name: 'Hoodie',
                sizes: ['large', 'small', 'medium'],
                price: 10,
                description: 'Cool black hoodie'
            }
    ]
    
    let result = metaCollector(products) //Storing the result of pre-test request to API

    it("Returns an object", () => {
        expect(result).toBeInstanceOf(Object)
    })

    it("Object has an attribute sizes of type ARRAY", () => {
        expect(result).toHaveProperty("sizes")
        expect(result.sizes).toBeInstanceOf(Array)
    })

    it("Object has attributes minPrice/maxPrice", () => {
        expect(result).toHaveProperty("maxPrice")
        expect(result).toHaveProperty("minPrice")
        expect(result.maxPrice).toBeDefined()
        expect(result.minPrice).toBeDefined()
    })

    it("Object has an attribute popularWords of type ARRAY and length 10", () => {
        expect(result).toHaveProperty("popularWords")
        expect(result.popularWords).toBeInstanceOf(Array)
        expect(result.popularWords.length === 10).toBe(true)
    })
})