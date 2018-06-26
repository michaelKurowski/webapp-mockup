const mockedProducts = require('mockedData/products.json')
const productColors = require('core/productColors')
module.exports = ['createModel', function (createModel) {
    this.getSimiliarProducts = () => {
        const result = mockedProducts.map(product => {
            const mappedProduct = Object.assign({}, product)
            mappedProduct.colors = product.colors.map(color => productColors[color])
            return createModel.product(mappedProduct)
        })
        return result
    }
        
    this.getFirstProduct = () => {
        const mappedProduct = Object.assign({}, mockedProducts[0])
        mappedProduct.colors = mappedProduct.colors.map(color => productColors[color])
        return createModel.product(mappedProduct)
    }

}]