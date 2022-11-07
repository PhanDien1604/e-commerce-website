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
    setDataSourceProducts(state, dataSource) {
        state.products.dataSource = dataSource
    }
}