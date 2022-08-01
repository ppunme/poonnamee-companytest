import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ViewCompany from "../views/ViewCompany.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:companyId",
    name: "viewCompany",
    component: ViewCompany,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
