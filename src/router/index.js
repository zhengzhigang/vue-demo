import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout';

Vue.config.devtools = true;
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout
        }
    ]
});
