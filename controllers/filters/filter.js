const metaCollector = require('../meta/metaCollector')

module.exports = {
  filterProducts: (filter, products) => {
    if(Object.keys(filter).length > 0){
    //Object to be returned from function
      let result = {
        products: [],
        ...metaCollector(products) //Get and analyze all required meta
      }

      if(filter.highlight){ //if a highlight filter is present - do a conversion into an array
        let filterSplit = filter.highlight.split(',')
      }

      result.products = products.filter(product => {
        
        if(filter.highlight){ //if a highlight filter is present - do a conversion into an array
          let filterSplit = filter.highlight.split(',')  //highlight parameter can have multiple values, but is stored as string - converting into array
          filterSplit.forEach((hl) => {
            if(product.description.split(" ").includes(hl)){
              product.description = product.description.replace(hl, `<em>${hl}</em>`)
             
            }
          })
        } 

        //Dynamically generated logical expressions to be able to handle all possible filter's combinations at once, which decreases the complexity of this function
        const maxpriceMet = filter.maxprice ? product.price <= filter.maxprice : true
        const sizeMet = filter.size ? product.sizes.indexOf(filter.size) > -1 : true
          
        if(maxpriceMet && sizeMet){
          //If the highlight filter is present - change substrings in description accordingly
          return true
        }
      })
      return result
    }else{
      return {
        products: products,
        ...metaCollector(products)
      }
    }
    
  }
}