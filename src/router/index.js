import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About";
import Leaders from "@/views/Leaders";
import Cowards from "@/views/Cowards";
import Timemachine from "@/views/Timemachine";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/leaders',
    name: 'Leaders',
    component: Leaders
  },
  {
    path: '/eliminated',
    name: 'Eliminated',
    component: About
  },
  {
    path: '/cowards',
    name: 'Coward',
    component: Cowards
  },
  {
    path: '/timemachine',
    name: 'Timemachine',
    component: Timemachine
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
