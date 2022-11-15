import Main from "../pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "../pages/UserPage.vue";
import About from "../pages/About.vue";
import IdPost from "../pages/IdPost.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/users',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/users/:id',
        component: IdPost
    },


]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router;