import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage.vue";
import CompetitionPage from "./components/CompetitionPage.vue";
import TeamPage from "./components/TeamPage.vue";
import TimelinePage from "./components/TimelinePage.vue";
// import Winners from "./components/Winners.vue";
import HallOfFame from "./components/HallOfFame.vue";
import ChallangesPage from "./components/ChallangesPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/competition",
      name: "CompetitionPage",
      component: CompetitionPage,
    },
    {
      path: "/challanges",
      name: "ChallangesPage",
      component: ChallangesPage,
    },
    {
      path: "/team",
      name: "TeamPage",
      component: TeamPage,
    },
    {
      path: "/timeline",
      name: "TimelinePage",
      component: TimelinePage,
    },
    // {
    //   path: "/winners",
    //   name: "Winners",
    //   component: Winners,
    // },
    {
      path: "/hall_of_fame",
      name: "Hall of Fame",
      component: HallOfFame
    }
  ],
});


export default router;
