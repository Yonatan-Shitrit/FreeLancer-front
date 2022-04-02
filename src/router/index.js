import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import gigExplore from '../views/gig-explore.vue'
import gigDetails from '../views/gig-details.vue'
import gigEdit from '../views/gig-edit.vue'
import backOffice from '../views/back-office.vue'
import dashBoard from '../views/office-dashboard.vue'
import userOrdersVue from '../views/user-orders.vue'
import smartFilter from '../views/smart-filter.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/gig',
      name: 'gigExplore',
      component: gigExplore
    },
    {
      path: '/gig/:id',
      name: 'gigDetails',
      component: gigDetails
    },
    {
      path: '/seller/gig-edit/:id?',
      name: 'gigEdit',
      component: gigEdit
    },
    {
      path: '/seller/',
      name: 'backOffice',
      component: backOffice
    },
    {
      path: '/seller/dashboard',
      name: 'dashBoard',
      component: dashBoard
    },
    {
      path: '/orders/',
      name: 'orders',
      component: userOrdersVue
    },
    {
      path: '/smart',
      name: 'smartFilter',
      component: smartFilter
    },
  ]
})

export default router
