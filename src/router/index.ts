import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/Auth.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/requests",
    name: "Requests",
    component: () => import("@/views/Requests.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("@/views/Help.vue"),
    meta: {
      layout: "main",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
