export default {
    setCollapsed(state, collapsed) {
        state.collapsed = collapsed
    },
    setThemed(state, themed) {
        state.themed = themed
    },
    setSelectedKeys(state, selectedKeys) {
        state.selectedKeys = selectedKeys
    },
    setVisibleChangeAddress(state, visibleChangeAddress) {
        console.log(state.visibleChangeAddress)
        state.visibleChangeAddress = visibleChangeAddress
    },
    setDataSourceProducts(state, dataSource) {
        state.products.dataSource = dataSource
    },
    setProduct(state, product) {
        state.product = product
    },
}