// 手机端的适配
import './styles/main.scss';
import './utils/rem.js';

import Vue from 'vue';
Vue.config.debug = true;
import VueRouter from 'vue-router';

import fastclick from 'fastclick';
fastclick.attach(document.body);

import registerRouters from './routers';
import App from './app.vue';


Vue.use(VueRouter);

var router = new VueRouter({
    hashbang: false,
});

registerRouters(router);

router.start(App, '#app');
