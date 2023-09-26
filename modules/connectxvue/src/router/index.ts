import { createRouter, createWebHistory } from 'vue-router'

export let routes = [
    {
        path: '/connectxvue/MUserDeptList',
        component: MUserDeptList,
    }
]

import { MUserDeptList } from '@/views';

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;