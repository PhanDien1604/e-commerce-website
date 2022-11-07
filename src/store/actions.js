export default {
    changeCollapsed({commit, state}) {
        commit('setCollapsed', !state.collapsed)
    },
    changeThemed({commit, state}) {
        commit('setThemed', state.themed === 'dark' ? 'light' : 'dark')
    },
    getDataSourceProducts({commit, state}) {
        var dataSource = [
            {
                key: '1',
                image: 'product-1.jpg',
                code: '101',
                name: 'John Brown',
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
            }
        ]
        commit('setDataSourceProducts', dataSource)
    }
}