import Vue from 'vue'
import VueRouter from 'vue-router'
import intropage from '../components/intro.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: intropage }
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router
// router.beforeEach(async (to, from, next) => {
//     next()
// })
