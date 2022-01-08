import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About";
import Leaders from "@/views/Leaders";
import Cowards from "@/views/Cowards";
import Timemachine from "@/views/Timemachine";
import Wallet from "@/views/Wallet";
import npgoress from 'nprogress';

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
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    npgoress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  npgoress.done()
})


export default router
