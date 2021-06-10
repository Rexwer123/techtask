const metaCollector = (products) => {
    result = {
        sizes: [],
        maxPrice: products[0].price,
        minPrice: products[0].price,
        popularWords: []
    }
    
    products.forEach(product => {
        //Getting MIN and MAX prices
        if(product.price > result.maxPrice){
            result.maxPrice = product.price
        }
        if(product.price < result.minPrice){
            result.minPrice = product.price
        }
          
        //Collecting all possible sizes
        product.sizes.forEach(size => {
            if(!result.sizes.includes(size)){
                result.sizes.push(size)
            }
        })

        //Finding most common words in description
        product.description.replace(".", "").split(" ").forEach(word => {
            let index = result.popularWords.map(e => e.word).indexOf(word)
            if(index > -1){
                result.popularWords[index]["count"] += 1
            }else{
                result.popularWords.push({word: word, count: 1})
            }
        })
    })

    result.popularWords.sort((a,b) => a.count < b.count ? 1 : -1) //Positioning words in descending order by count 
    result.popularWords = result.popularWords.slice(5, 15) //Removing most common 5 words from the list

    return result
}

module.exports = metaCollector

