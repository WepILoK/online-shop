export default {
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('DELETE_CART_ITEM', index)
    },
    INCREMENT_ITEM_CART({commit}, index) {
        commit('INCREMENT', index)
    },
    DECREMENT_ITEM_CART({commit}, index) {
        commit('DECREMENT', index)
    }
}