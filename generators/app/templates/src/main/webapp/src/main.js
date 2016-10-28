window.Cookies = require('js-cookie');

import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Interceptors from './interceptors'
import 'vue-material/dist/vue-material.css'

// import App from './App'

// Router
Vue.use(VueRouter)

// Resource
Vue.use(VueResource)
Vue.http.interceptors.push(Interceptors);
// console.log(document.cookie);

// Vue material
Vue.use(VueMaterial)
Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
})

/* eslint-disable no-new */
const Home = { template: '<div>Home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

import Login from './components/login/Login.vue'
import NavBar from './components/NavBar.vue'

import Auth from './Auth'

const routes = [
  { path: '/', component: Home },
  { path: '/login', name: 'login', component: Login},
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // short for routes: routes
})

router.beforeEach((to, from, next) => {
    console.log(to);

    if(to.name == "login") {
        next();

        return;
    }

    Auth.isAuthenticated().then(response => {
        if(response !== true) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    });
})

const app = new Vue({
  router,
  components: { NavBar },

    computed: {
        username() {
            return Auth.username | "guest";
        }
    }
}).$mount('#app')
