import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/HomePage.vue";
import CompetitionPage from "./components/CompetitionPage.vue";
import TeamPage from "./components/TeamPage.vue";
import TimelinePage from "./components/TimelinePage.vue";
// import Winners from "./components/Winners.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";
import HallOfFame from "./components/HallOfFame.vue";
import ChallangesPage from "./components/ChallangesPage.vue";

import { firebaseApp } from "./firebase";

Vue.use(Router);

let router = new Router({
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
      path: "/admin",
      name: "Login",
      component: Login,
      meta: {
        requiresGuest: true,
      },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/hall_of_fame",
      name: "Hall of Fame",
      component: HallOfFame
    }
  ],
});

//NavGuards
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (!user) {
        next({
          path: "/admin",
          query: {
            redirect: to.fullPath,
          },
        });
      } else {
        next();
      }
    });
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        next({
          path: "/dashboard",
          query: {
            redirect: to.fullPath,
          },
        });
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

export default router;
