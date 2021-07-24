import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
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
    },
    actions: {
        GET_PRODUCTS({commit}) {
            axios.get('http://localhost:3000/products')
                .then(({data}) => {
                    commit('SET_PRODUCTS', data)
                    return data
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
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
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        CART(state) {
            return state.cart
        }
    },
    modules: {}
})
