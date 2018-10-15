// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueHead from 'vue-head';
// import ElementUI from 'element-ui';
import App from './App'
import router from './router'
import createStore from './store';
// import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.less'

// mount apis
// import * as apis from '@/apis'

// Vue.prototype.$api = apis

Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueHead);


const store = createStore();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
