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
    setAmountProduct(state, amountProduct) {
        state.amountProduct = amountProduct
    },
    setTotalProduct(state, totalProducts) {
        state.totalProducts = totalProducts
    },
    setDisablePlus(state, disablePlus) {
        state.disablePlus = disablePlus
    },
    setDisableMinus(state, disableMinus) {
        state.disableMinus = disableMinus
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