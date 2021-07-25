export default {
    SET_PRODUCTS: (state, data) => {
        state.products = data
    },
    SET_CART: (state, data) => {
        if (state.cart.length) {
            for (let item of state.cart) {
                if (item.article === data.article) {
                    return item.quantity++
                }
            }
            state.cart.push(data)
        } else {
            state.cart.push(data)
        }
    },
    DELETE_CART_ITEM: (state, index) => {
        state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--
        }
    },
}