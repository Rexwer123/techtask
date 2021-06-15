const metaCollector = require('../meta/metaCollector')

const highlight = ({highlight}, product) => {
  if(highlight){ //if a highlight filter is present - do a conversion into an array
    let filterSplit = highlight.split(',')  //highlight parameter can have multiple values, but is stored as string - converting into array
    filterSplit.forEach((hl) => {
      if(product.description.split(" ").includes(hl)){
        product.description = product.description.replace(hl, `<em>${hl}</em>`)
      }
    })
  }
}

const meetsConditions = (...args) => {
  if(args.includes(false)){
    return false
  }else{
    return true
  }
}

module.exports = {
  filterProducts: (filter, products) => {
    if(Object.keys(filter).length > 0){
    //Object to be returned from function
      let result = {
        products: [],
        ...metaCollector(products) //Get and analyze all required meta
      }

      result.products = products.filter(product => {
        //Dynamically generated logical expressions
        const maxpriceMet = filter.maxprice ? product.price <= filter.maxprice : true
        const sizeMet = filter.size ? product.sizes.indexOf(filter.size) > -1 : true

        highlight(filter, product) //Highlight words from the highlight filter if 
        return meetsConditions(maxpriceMet, sizeMet) //Check wether the item satisfies all filters
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