import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: '',
        refreshToken: null,
        name: null,
    },
    getters: {},
    mutations: {
        LOG_IN: (state, payload) => {
            console.log(state.name);
            state.token = payload.token;
            state.name = payload.username;
            state.refreshToken = payload.refreshToken;
            localStorage.setItem("token", payload.token);
            localStorage.setItem("refreshToken", payload.refreshToken);
            localStorage.setItem("name", payload.name);
        },
        LOG_OUT(state) {
            localStorage.clear();
            state.name = null;
            state.refreshToken = null;
            state.token= null
        }
    },
    actions: {
        async login({commit}, payload) {
            console.log(" da va set age");
            commit('LOG_IN', payload);
        },
        logout({commit}) {
            commit('LOG_OUT')
        }
    }, modules: {}
})