export default {
    changeCollapsed({commit, state}) {
        commit('setCollapsed', !state.collapsed)
    },
    changeThemed({commit, state}) {
        commit('setThemed', state.themed === 'dark' ? 'light' : 'dark')
    },
    changeAmount({commit, state, dispatch}, product) {
        if(product.amount > 0 && product.amount <= product.totalProduct) {
        } else {
            if(product.amount > product.totalProduct) {
                product.amount = product.totalProduct
            } else {
                product.amount = 1
            }
        }
        dispatch('checkAmount', product)
    },
    minusAmount({commit, state, dispatch}, product) {
        if(product.amount > 1) {
            product.amount--
            if(product.checked) {
                state.cart.totalPrice -= product.price
            }
        }
        dispatch('checkAmount', product)
    },
    plusAmount({commit, state, dispatch}, product) {
        console.log(product)

        if(product.amount < product.totalProduct) {
            product.amount++
            if(product.checked) {
                state.cart.totalPrice += product.price
            }
        }
        dispatch('checkAmount', product)
    },
    checkAmount({commit, state}, product) {
        if(product.amount === 1) {
            product.minus = true
        } else {
            product.minus = false
        }

        if(product.amount === product.totalProduct) {
            product.plus = true
        } else {
            product.plus = false
        }
    },
    getDataSourceProducts({commit, state}) {
        var dataSource = [
            {
                key: '1',
                image: 'product-10.jpg',
                code: '101',
                name: 'Ecoclean Septic - Men Vi Sinh Xử Lý Hầm Cầu Bể Phốt - Khử mùi, phân hủy chất thải, hết nghẹt hầm, hiệu quả sau 1 đêm - Gói 100g',
                price: 32000,
                amount: 10,
                status: 'on',
            }, 
            {
                key: '2',
                image: 'product-2.jpg',
                code: '102',
                name: 'Jim Green',
                price: 42000,
                amount: 15,
                status: 'off',
            }, 
            {
                key: '3',
                image: 'product-3.jpg',
                code: '103',
                name: 'Joe Black',
                price: 312000,
                amount: 20,
                status: 'on',
            },
            {
                key: '4',
                image: 'product-10.jpg',
                code: '101',
                name: 'John Brown',
                price: 32000,
                amount: 10,
                status: 'on',
            }, 
            {
                key: '5',
                image: 'product-2.jpg',
                code: '102',
                name: 'Jim Green',
                price: 42000,
                amount: 15,
                status: 'off',
            }, 
            {
                key: '6',
                image: 'product-3.jpg',
                code: '103',
                name: 'Joe Black',
                price: 312000,
                amount: 20,
                status: 'on',
            }
        ]
        commit('setDataSourceProducts', dataSource)
    },
    onCheckAll({commit, state, dispatch}) {
        var statusClick = false
        state.cart.shops.forEach(shop => {
            shop.checked = state.cart.checked
            dispatch('onCheckAllShop', {shop, statusClick})
        });
     
    },
    onCheckAllShop({commit, state, dispatch}, {shop, statusClick}) {
        if(!shop.checked) {
            state.cart.countShop--
        } else {
            state.cart.countShop++
        }
        if(statusClick && state.cart.countShop === state.cart.shops.length) {
            state.cart.checked = true
        }

        if(statusClick && state.cart.countShop != state.cart.shops.length) {
            state.cart.checked = false
        }
        var statusCLickItem = false
        
        shop.products.forEach(product => {
            product.checked = shop.checked
            dispatch('onCheckAllItem', {shop, product, statusCLickItem})
        });

        
    },
    onCheckAllItem({commit, state}, {shop, product, statusCLickItem}) {
        if(!product.checked) {
            shop.countProduct--
            state.cart.totalPrice -= product.amount * product.price
        } else {
            if(!statusCLickItem) {
                shop.countProduct = shop.products.length
            } else {
                shop.countProduct++
            }

            state.cart.totalPrice += product.amount * product.price
        }

        if(statusCLickItem && shop.countProduct === shop.products.length) {
            if(!shop.checked) {
                state.cart.countShop++
            }
            if(state.cart.countShop === state.cart.shops.length) {
                state.cart.checked = true
            }
            shop.checked = true
        }
        if(statusCLickItem && shop.countProduct !== shop.products.length) {
            if(shop.checked) {
                state.cart.countShop--
            }
            if(state.cart.countShop !== state.cart.shops.length) {
                state.cart.checked = false
            }
            shop.checked = false
        }
    },
    getCart({state}) {
        var data = {
            shops: [
                {
                  products: [
                    {
                      name: 'Tên sản phẩm',
                      price: 25000000,
                      amount: 4,
                      totalProduct: 10,
                      checked: false,
                      minus: false,
                      plus: false
                    },
                    {
                      name: 'Tên sản phẩm',
                      price: 25000000,
                      amount: 2,
                      totalProduct: 10,
                      checked: false,
                      minus: false,
                      plus: false
                    },
                  ],
                  countProduct: 0,
                  checked: false,
                },
                {
                  products: [
                    {
                      name: 'Tên sản phẩm',
                      price: 25000000,
                      amount: 4,
                      totalProduct: 10,
                      checked: false,
                      minus: false,
                      plus: false
                    },
                    {
                      name: 'Tên sản phẩm',
                      price: 25000000,
                      amount: 2,
                      totalProduct: 10,
                      checked: false,
                      minus: false,
                      plus: false
                    },
                  ],
                  countProduct: 0,
                  checked: false
                }
              ],
              totalProduct: 4,
              checked: false,
              countShop: 0,
              countProduct: 0,
              totalPrice: 0
            }
        state.cart = data
    },
    getProduct({state}) {
        var data = {
            name: 'Tên sản phẩm',
            price: 25000000,
            amount: 4,
            totalProduct: 10,
            minus: false,
            plus: false
        }

        state.product = data
    }
}