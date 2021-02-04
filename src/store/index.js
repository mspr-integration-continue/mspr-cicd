import Vue from 'vue';
import Vuex from 'vuex';
import users from './users';

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      users,
    },
  });
  return Store;
}
