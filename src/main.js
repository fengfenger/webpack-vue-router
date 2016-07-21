import Vue from 'vue';
Vue.config.debug = true;
import VueRouter from 'vue-router';

import fastclick from 'fastclick';
fastclick.attach(document.body);

// css的重置样式 目前rem机制还没有引进来
// import './styles/common/reset.scss';

import registerRouters from './routers';
import App from './app.vue';


Vue.use(VueRouter);

var router = new VueRouter({
    hashbang: false,
});

registerRouters(router);

router.start(App, '#app');
