import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainview',
    component: MainView
  },
]

const router = new VueRouter({
  routes
})

export default router
