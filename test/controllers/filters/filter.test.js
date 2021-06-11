const { filterProducts } = require("../../../controllers/filters/filter")


describe("Testing API-response filter", () => {
    //Storing the result of pre-test request to API
    let resultPriceFiltered
    let resultSizeFiltered
    let resultSizeFilteredByAll
    
    let sampleData =  [
        {
            name: 'Trousers',
            sizes: ['large', 'small'],
            price: 30,
            description: 'Cool blue trousers'
        },
        {
            name: 'T-Shirt',
            sizes: ['small'],
            price: 10,
            description: 'Cool blue t-shirt'
        },
        {
            name: 'Trousers',
            sizes: ['large', 'small'],
            price: 10,
            description: 'Cool green trousers'
        },
        {
            name: 'Hoodie',
            sizes: ['large', 'small', 'medium'],
            price: 10,
            description: 'Cool black hoodie'
        }
    ]

    resultPriceFiltered = filterProducts({maxprice: 10}, sampleData)
    resultSizeFiltered = filterProducts({size: 'large'}, sampleData)
    resultsFilteredByAll = filterProducts({maxprice: 10, size: 'large'}, sampleData)

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
        resultsFilteredByAll.products.forEach(item => {
            if(!item.sizes.includes('large') && item.price > 10){
                let flag = false
            }
        })
        expect(flag).toBe(true)
    })
})