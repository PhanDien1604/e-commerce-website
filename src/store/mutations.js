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
        state.visibleChangeAddress = visibleChangeAddress
    },
    setDataSourceProducts(state, dataSource) {
        state.products.dataSource = dataSource
    },
    setProduct(state, product) {
        state.product = product
    },
    setCart(state, cart) {
        state.cart = cart
    },
    setCategorise(state, categorise) {
        state.categorise = categorise
    },
    setOrderPayment(state, orderPayment) {
        state.orderPayment = orderPayment
    }
}