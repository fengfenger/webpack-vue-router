// 手机端的适配
import './utils/rem.js';
import './styles/main.scss';


import Vue from 'vue';
Vue.config.debug = true;
import VueRouter from 'vue-router';

var VueAsyncData = require('vue-async-data')
var VueResource = require('vue-resource')

import fastclick from 'fastclick';
fastclick.attach(document.body);

import registerRouters from './routers';
import App from './app.vue';

// 自定义过滤器
var filters = require('./filters');
Object.keys(filters).forEach(function(k) {
  Vue.filter(k, filter[k]);
});


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueAsyncData);

var router = new VueRouter({
    hashbang: false,
});

registerRouters(router);

router.start(App, '#app');
