import { createRouter, createWebHistory } from "vue-router";
import SignInView from "@/views/SignInView";

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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
