import Vue from 'vue'
import VueRouter from 'vue-router'
import intropage from '../components/page/intro.vue'
import showpage from '../components/page/show.vue'
import memberpage from '../components/page/member.vue'
import contactpage from '../components/page/contact.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: intropage },
    { path: '/product', name: 'product', component: showpage },
    { path: '/member', name: 'member', component: memberpage },
    { path: '/contact', name: 'contact', component: contactpage }
]

const router = new VueRouter({
    mode: 'history',
    base: '/Yineng',
    routes // short for `routes: routes`
})

export default router
// router.beforeEach(async (to, from, next) => {
//     next()
// })
