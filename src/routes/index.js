const routes = [
  { path: "/", component: () => import("../pages/Home.vue") },
  { path: "/host", component: () => import("../pages/Host.vue") },
];

export default routes;
