import Vue from 'vue';
import Vuex from 'vuex';

import Api from './api';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        apiBaseUrl: 'https://localhost:8080',
    },
    mutations: {
        set: function(state, data) {
            state[data.key] = data.value;
        }
    },
    actions: {
        getMetrics: function(context, data) {
            return Api.get('/metrics', data).then(response => {
               return context.commit('set', {
                    key: 'metrics', value: response
                });
            });
        }
    }
});
