const routes = [{
        path: "/",
        component: () =>
            import ("../pages/Home.vue")
    },
    {
        path: "/host",
        component: () =>
            import ("../pages/Host.vue")
    },
    {
        path: "/waiting-room",
        component: () =>
            import ("../pages/WaitingRoom.vue")
    },
];

export default routes;