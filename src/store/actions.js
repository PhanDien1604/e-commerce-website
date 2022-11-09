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