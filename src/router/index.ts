import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/Auth.vue"),
    meta: {
      layout: "auth",
      auth: false,
    },
  },
  {
    path: "/requests",
    name: "Requests",
    component: () => import("@/views/Requests.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("@/views/Help.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;

  if (requireAuth && store.getters["isAuthenticated"]) {
    next();
  } else if (requireAuth && !store.getters["isAuthenticated"]) {
    next("/auth?message=auth");
  } else {
    next();
  }
});

export default router;
