import MemberCreate from "@/components/MemberCreate.vue";
import MemberLogin from "@/components/MemberLogin.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/member/create',
        component: MemberCreate
    },

    {
        path: '/member/login',
        component: MemberLogin
    }
]

// localhost:3000/#/member/create 
const router = createRouter (
    {
        history: createWebHistory(),
        routes
    }
)

export default router;
