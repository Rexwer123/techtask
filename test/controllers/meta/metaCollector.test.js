const metaCollector = require("../../../controllers/meta/metaCollector")
const { getProductsModel } = require("../../../models/productsModel")



describe("Testing meta-data collector", () => {
    let result //Storing the result of pre-test request to API

    beforeAll(async () => {
        APIResponse = await getProductsModel()
        result = metaCollector(APIResponse)
    })

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

    afterAll(done => {
        done()
    })
})