import { createStore } from 'vuex'


export const SET_TOKEN = "SET_TOKEN"
export const CLEAR_TOKEN = "CLEAR_TOKEN"
const store = createStore({
    state () {
        return {
            token: ''
        }
    },
    mutations: {
        [SET_TOKEN]: function (state, payload) {
            state.token = payload
        },
        [CLEAR_TOKEN]: function (state, payload) {
            state.token = ''
        }
    },
    actions: {

    }
})


export default store