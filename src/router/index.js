import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Gallery from "../components/Gallery.vue";
import Contact from "../components/Contact.vue";
import Merch from "../components/Merch.vue";
import Tickets from "../components/Tickets.vue";

const routes  = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/o-nas",
        name: "about",
        component: About,
    },
    {
        path: "/galeria",
        name: "gallery",
        component: Gallery,
    },
    {
        path: "/merch",
        name: "merch",
        component: Merch,
    },
    {
        path: "/bilety",
        name: "tickets",
        component: Tickets,
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;