import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store";
import Enter_screen from "../views/Enter_screen.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Enter_screen",
    component: Enter_screen,
    meta: {
      title: "Enter screen",
      requiresAuth: false
    }
  },
  {
    path: "/sign_up",
    name: "Sign_up",
    component: () => import("../views/Sign_up.vue"),
    meta: {
      title: "Sign up",
      requiresAuth: false
    }
  },
  {
    path: "/sign_in",
    name: "Sign_in",
    component: () => import("../views/Sign_in.vue"),
    meta: {
      title: "Sign in",
      requiresAuth: false
    }
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main.vue"),
    meta: {
      title: "Articles",
      requiresAuth: true
    }
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue"),
    meta: {
      title: "Page not found",
      requiresAuth: false
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log("Store.getters.IS_LOGGED_IN: " + Store.getters.IS_LOGGED_IN);
  if (to.meta.requiresAuth && !Store.getters.IS_LOGGED_IN) {
    next("/sign_in");
  } else {
    document.title = to.meta.title;
    next();
  }
});

export default router;
