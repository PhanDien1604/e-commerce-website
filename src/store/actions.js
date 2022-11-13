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
    }
}