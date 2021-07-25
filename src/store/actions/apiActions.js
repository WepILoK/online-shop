import axios from "axios";

export default {
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
}