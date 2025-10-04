import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Gallery from "../components/Gallery.vue";
import Contact from "../components/Contact.vue";
import Merch from "../components/Merch.vue";
import Tickets from "../components/Tickets.vue";
import PrivacyPolicy from "../components/PrivacyPolicy.vue";
import RapBattles from "../components/RapBattles.vue";
import TermsOfUse from "../components/TermsOfUse.vue";

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
        path: "/kontakt",
        name: "contact",
        component: Contact,
    },
    {
        path: "/zglos-sie-na-bitwy",
        name: "rap-battles",
        component: RapBattles,
    },
    {
        path: "/regulamin",
        name: "terms-of-use",
        component: TermsOfUse,
    },
    {
        path: "/polityka-prywatnosci",
        name: "privacy-policy",
        component: PrivacyPolicy,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;