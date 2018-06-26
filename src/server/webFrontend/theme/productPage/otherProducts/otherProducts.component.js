require('mainAppProvider').get().component('productTiles', require('./productTiles/productTiles.component.js'))

module.exports = {
    bindings: {
        setViewedProduct: '<'
    },
    template: require('./otherProducts.pug'),
    controller: ['$scope', 'getProducts', require('./otherProducts.controller')]
}