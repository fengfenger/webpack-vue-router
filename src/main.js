// 手机端的适配
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
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

//登录中间验证，页面需要登录而没有登录的情况直接跳转登录

registerRouters(router);

router.start(App, '#app');
