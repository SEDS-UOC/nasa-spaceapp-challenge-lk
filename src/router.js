import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import CompetitionPage from './components/CompetitionPage.vue'
import TeamPage from './components/TeamPage.vue'
import TimelinePage from './components/TimelinePage.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/competition',
      name: 'CompetitionPage',
      component: CompetitionPage
    },
    {
      path: '/team',
      name: 'TeamPage',
      component: TeamPage
    },
    {
      path: '/timeline',
      name: 'TimelinePage',
      component: TimelinePage
    },
  ]
})

export default router
