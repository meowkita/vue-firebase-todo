import { createRouter, createWebHistory } from "vue-router";
import SignInView from "@/views/SignInView";
import store from "@/store";

const routes = [
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignInView,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("@/views/SignUpView"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/sign-in");
  } else {
    next();
  }
});

export default router;
