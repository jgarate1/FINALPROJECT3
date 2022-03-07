import { createRouter, createWebHistory } from "vue-router";
import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Hello from "./pages/hello.vue";
import NotFound from "./pages/404.vue";
import Tournament from "./pages/tournaments.vue";
import Login from "./pages/login.vue";
import Brackets from "./pages/brackets.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/hello",
    name: "Hello",
    component: Hello,
  },

  {
    path: "/tournaments",
    name: "Tournaments",
    component: Tournament,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/brackets",
    name: "Brackets",
    component: Brackets,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
