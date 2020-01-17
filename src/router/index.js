import Vue from "vue";
import VueRouter from "vue-router";
import Enter_screen from "../views/Enter_screen.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Enter_screen",
    component: Enter_screen
  },
  {
    path: "/sign_up",
    name: "Sign_up",
    component: () => import("../views/Sign_up.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
