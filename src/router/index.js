import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import gigExplore from '../views/gig-explore.vue'
import gigDetails from '../views/gig-details.vue'
import gigEdit from '../views/gig-edit.vue'
import logPage from '../views/log-page.vue'
import backOffice from '../views/back-office.vue'

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
      path: '/gig-edit/:id?',
      name: 'gigEdit',
      component: gigEdit
    },
    {
      path: '/login/',
      name: 'logPage',
      component: logPage
    },
    {
      path: '/seller/',
      name: 'backOffice',
      component: backOffice
    }
  ]
})

export default router
