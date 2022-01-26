const routes = [
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
  },

  // HOST
  {
    path: "/host",
    component: () => import("../pages/Host.vue"),
  },

  {
    path: "/waiting-room",
    component: () => import("../pages/WaitingRoom.vue"),
  },

  // JOIN
  {
    path: "/join",
    component: () => import("../pages/Join.vue"),
  },
];

export default routes;
