import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
    },
    mutations: {
        SET_PRODUCTS: (state, data) => {
            state.products = data
        }
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
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        }
    },
    modules: {}
})
