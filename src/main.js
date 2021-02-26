import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store';
import { Notifier } from '@airbrake/browser';

Vue.config.productionTip = false;

var airbrake = new Notifier({
  environment: 'production',
  projectId: 324964,
  projectKey: '9849b8c4c65f52021ec7a83366b2fd00',
});

Vue.config.errorHandler = function (err, vm, info) {
  airbrake.notify({
    error: err,
    params: { info: info },
  });
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
