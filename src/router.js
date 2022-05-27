import Vue from "vue";
import VueRouter from "vue-router";

// Pages

//CP = Create Points
//CS = Create Shopes
//El = Create Elements
import CP from "./components/CP_";
import CS from "./components/CS_";
import El from "./components/El_";
import GUI from "./components/GUI_";

import Page3 from "./components/Page3";
import Page4a from "./components/Page4a";
import Page4b from "./components/Page4b";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: "navbar",
    linkActiveClass: "active",
    routes: [{
            path: "/",
            component: CP,
        },
        {
            path: "/CS",
            component: CS,
        },
        {
            path: "/El",
            component: El,
        },
        {
            path: "/GUI",
            component: GUI,
        },
        {
            path: "/page3",
            component: Page3,
        },

        {
            path: "/page4a",
            component: Page4a,
        },
        {
            path: "/page4b",
            component: Page4b,
        },

        {
            path: "*",
            redirect: "/",
        },
    ],
});

export default router;