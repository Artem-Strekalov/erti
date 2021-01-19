import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";

Vue.use(VueRouter);

const routes = [
 
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/foto",
    name: "Foto",
    component: () => import("../views/Foto.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/concept",
    name: "Сoncept",
    component: () => import("../views/Сoncept.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
