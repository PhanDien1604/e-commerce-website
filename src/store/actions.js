import api from "./api"

export default {
    changeCollapsed({commit, state}) {
        commit('setCollapsed', !state.collapsed)
    },
    changeThemed({commit, state}) {
        commit('setThemed', state.themed === 'dark' ? 'light' : 'dark')
    },
    changeAmount({commit, state, dispatch}, product) {
        if(product.amount > 0 && product.amount <= product.quantity) {
        } else {
            if(product.amount > product.quantity) {
                product.amount = product.quantity
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
                state.cart[0].totalPrice -= product.price
            }
        }
        dispatch('checkAmount', product)
    },
    plusAmount({commit, state, dispatch}, product) {
        if(product.amount < product.quantity) {
            product.amount++
            if(product.checked) {
                state.cart[0].totalPrice += product.price
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

        if(product.amount === product.quantity) {
            product.plus = true
        } else {
            product.plus = false
        }
    },
    async getDataSourceProducts({commit, state}) {
        const {data} = await api.getAllProducts();
        commit('setDataSourceProducts', data)
    },
    async getCategorise({commit, state}) {
        const {data} = await api.getCategorise();
        commit('setCategorise', data)
    },
    onCheckAll({commit, state, dispatch}) {
        var statusClick = false
        state.cart[0].shops.forEach(shop => {
            shop.checked = state.cart[0].checked
            dispatch('onCheckAllShop', {shop, statusClick})
        });
     
    },
    onCheckAllShop({commit, state, dispatch}, {shop, statusClick}) {
        if(!shop.checked) {
            state.cart[0].countShop--
        } else {
            state.cart[0].countShop++
        }
        if(statusClick && state.cart[0].countShop === state.cart[0].shops.length) {
            state.cart[0].checked = true
        }

        if(statusClick && state.cart[0].countShop != state.cart[0].shops.length) {
            state.cart[0].checked = false
        }
        console.log(state.cart[0])

        var statusCLickItem = false
        
        shop.products.forEach(product => {
            product.checked = shop.checked
            dispatch('onCheckAllItem', {shop, product, statusCLickItem})
        });

        
    },
    onCheckAllItem({commit, state}, {shop, product, statusCLickItem}) {
        if(!product.checked) {
            shop.countProduct--
            state.cart[0].totalPrice -= product.amount * product.price
        } else {
            if(!statusCLickItem) {
                shop.countProduct = shop.products.length
            } else {
                shop.countProduct++
            }

            state.cart[0].totalPrice += product.amount * product.price
        }

        if(statusCLickItem && shop.countProduct === shop.products.length) {
            if(!shop.checked) {
                state.cart[0].countShop++
            }
            if(state.cart[0].countShop === state.cart[0].shops.length) {
                state.cart[0].checked = true
            }
            shop.checked = true
        }
        if(statusCLickItem && shop.countProduct !== shop.products.length) {
            if(shop.checked) {
                state.cart[0].countShop--
            }
            if(state.cart[0].countShop !== state.cart[0].shops.length) {
                state.cart[0].checked = false
            }
            shop.checked = false
        }
    },
    async getProduct({state}, id) {
        var {data} = await api.getProduct(id)
        data.amount = 1
        state.product = data
    },
    async getProductByCategoryId({commit}, id) {
        var {data} = await api.getProductByCategoryId(id)
        commit('setDataSourceProducts', data)
        return true;
    },
    async getProductByShopId({commit}, id) {
        var {data} = await api.getProductByShopId(id)
        commit('setDataSourceProducts', data)
        return true;
    },
    async getShop({state}, id) {
        var {data} = await api.getShop(id)
        state.shop = data
        return true;
    },
    async getProfile({state}, id) {
        var {data} = await api.getProfile(id)
        state.userProfile = data
        return true;
    },
    async getCart({state}, id) {
        var {data} = await api.getCart(id)
        var cart = {}
        var shops = []
        Object.keys(data).forEach(key => {
            var shop = {}
            var products = []
            var idShop = key.split('!!!')[0]
            var nameShop = key.split('!!!')[1]

            data[key].forEach((product) => {
                product.product.amount = 1
                product.product.checked = false
                product.product.minus = true,
                product.product.plus = false
                products.push(product.product)
            })
        
            shop.id = idShop
            shop.title = nameShop
            shop.countProduct = 0
            shop.countProduct = 0
            shop.checked = false
            shop.products = products

            shops.push(shop)
        });
        cart.checked = false
        cart.countShop = 0
        cart.countProduct = 0
        cart.totalPrice = 0
        cart.shops = shops

        state.cart[0] = cart
        return true;
    },
    async search({commit}, keyword) {
        var {data} = await api.search(keyword)
        commit('setDataSourceProducts', data)
        return true;
    },
    async getOrder({state}, id) {
        var {data} = await api.getOrder(id)
        state.order = data
        return true;
    },
    async addShipment({state}, data) {
        var {data} = await api.addShipment(data)
        return data;
    },
    async addPayment({state}, data) {
        var {data} = await api.addPayment(data)
        return data;
    },
    async addOrder({state}, data) {
        var {data} = await api.addOrder(data)
        return data;
    },
    async addCart({state}, data) {
        var {data} = await api.addCart(data)
        return data;
    },
}