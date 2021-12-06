import Homepage from "../views/Homepage.vue";
import Coinpage from "../views/Coinpage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/:id",
    component: Coinpage,
    name: "coin_page",
    props: true,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
