export default {
    changeCollapsed({commit, state}) {
        commit('setCollapsed', !state.collapsed)
    },
    changeThemed({commit, state}) {
        commit('setThemed', state.themed === 'dark' ? 'light' : 'dark')
    },
    changeAmount({commit, state, dispatch}, e) {
        var value = Number(e.target.value)

        if(value > 0 && value <= state.totalProducts) {
            commit('setAmountProduct', value)
        } else {
            commit('setAmountProduct', 1)
            e.target.value = 1

            if(value > state.totalProducts) {
                commit('setAmountProduct', state.totalProducts)
                e.target.value = state.totalProducts
            }
        }

        dispatch('checkAmount')
    },
    minusAmount({commit, state, dispatch}, e) {
        let amount = e.target.closest('.amount').querySelector('input')
        var value = Number(amount.value)

        if(value > 1) {
            amount.value = value - 1
        }

        dispatch('checkAmount', e)
    },
    plusAmount({commit, state, dispatch}, e) {
        let amount = e.target.closest('.amount').querySelector('input')
        var value = Number(amount.value)

        if(value < state.totalProducts) {
            amount.value = value + 1
        }
        dispatch('checkAmount', e)
    },
    checkAmount({commit, state}, e) {
        let amount = e.target.closest('.amount').querySelector('input')
        var value = Number(amount.value)
        console.log()

        if(value === 1) {
            e.target.closest('.amount').querySelector('.minus').classList.add('disable')
        } else {
            e.target.closest('.amount').querySelector('.minus').classList.remove('disable')
        }

        if(value === state.totalProducts) {
            e.target.closest('.amount').querySelector('.plus').classList.add('disable')
        } else {
            e.target.closest('.amount').querySelector('.plus').classList.remove('disable')
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
        } else {
            if(!statusCLickItem) {
                shop.countProduct = shop.products.length
            } else {
                shop.countProduct++
            }
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
    }
}