import Vue from 'vue';
import Router from 'vue-router'
import { component } from 'vue/types/umd';
import Test from './components/test.vue'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/test',
            component: Test
        }
    ]
})

