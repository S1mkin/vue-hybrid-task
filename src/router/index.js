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
    path: "/sign_in",
    name: "Sign_in",
    component: () => import("../views/Sign_in.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
