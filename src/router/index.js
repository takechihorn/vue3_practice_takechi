import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/jobs/Jobs.vue";
import WordPress from "../views/WordPress.vue";
import GetIP from "../views/GetIP.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/wordpress",
    name: "WordPress",
    component: WordPress,
  },
  {
    path: "/getip",
    name: "GetIP",
    component: GetIP,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
