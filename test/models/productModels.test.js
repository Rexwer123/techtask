const { getProductsModel } = require("../../models/productsModel")

describe("Testing Models", () => {
    describe("Testing getProductModel", () => {
        it("Returns an array of products", () => {
            expect(getProductsModel()).resolves.toBeInstanceOf(Array)
        })
    })
})