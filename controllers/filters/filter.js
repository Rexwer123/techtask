const metaCollector = require('../meta/metaCollector')

module.exports = {
  filterProducts: (filter, products) => {
    //Object to be returned from function
    let result = {
      productsRaw: products,
      products: [],
      ...metaCollector(products) //Get and analyze all required meta
    }

    result.products = products.filter(product => {
       
        //Dynamically generated logical expressions to be able to handle all possible filter's combinations at once, which decreases the complexity of this function
        const maxpriceMet = filter.maxprice ? product.price <= filter.maxprice : true
        const sizeMet = filter.size ? product.sizes.indexOf(filter.size) > -1 : true
        
        if(maxpriceMet && sizeMet){
          //If the highlight filter is present - change substrings in description accordingly
          if(filter.highlight){
            filter.highlight.forEach((hl) => {
              if(product.description.split(" ").includes(hl)){
                product.description = product.description.replace(hl, `<em>${hl}</em>`)
              }
            })
          }
          return true
        }
    })

    return result
  }
}