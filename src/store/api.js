import Vue from 'vue';
import { store } from './store';

export default {
  get(url, request) {
    return Vue.http.get(
      store.state.apiBaseUrl + url,
      request
    ).then(response => Promise.resolve(response.body)).catch(error => Promise.reject(error));
  }
};