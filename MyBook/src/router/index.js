import { createRouter, createWebHashHistory } from 'vue-router'

import Main from '../components/Main.vue'
import FarewellMyConcubine from '../components/router/FarewellMyConcubine.vue'
import Live from '../components/router/Live.vue'
import Siege from '../components/router/Siege.vue'
import TheCouquestToHappiness from '../components/router/TheCouquestToHappiness.vue'
import TheShawshankRedemption from '../components/router/TheShawshankRedemption.vue'
import Loading from '../components/router/Loading.vue'
import Person from '../components/router/Person.vue'
import Login from '../components/router/Load/Login.vue'
import Register from '../components/router/Load/Register.vue'
import Profile from '../components/router/PersonCenter/profile.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'main',
            path: '/main',
            component: Main
        },
        {
            name: 'FarewellMyConcubine',
            path: '/FarewellMyConcubine/:id',
            component: FarewellMyConcubine,
            props: true
        },
        {
            name: 'Live',
            path: '/Live/:id',
            component: Live,
            props: true
        },
        {
            name: 'Siege',
            path: '/Siege/:id',
            component: Siege,
            props: true
        },
        {
            name: 'TheCouquestToHappiness',
            path: '/TheCouquestToHappiness/:id',
            component: TheCouquestToHappiness,
            props: true
        },
        {
            name: 'TheShawshankRedemption',
            path: '/TheShawshankRedemption/:id',
            component: TheShawshankRedemption,
            props: true
        },
        {
            name: 'Loading',
            path: '/Loading',
            component: Loading,
            children: [
                {
                    name: 'Login',
                    path: 'login',
                    component: Login
                },
                {
                    name: 'Register',
                    path: 'register',
                    component: Register
                },
                {
                    name: 'LoadingDefault',
                    path: '',
                    redirect: 'Login'
                }
            ]
        },
        {
            name: 'Person',
            path: '/Person',
            component: Person,
            children: [
                {
                    name: 'Profile',
                    path: 'Profile',
                    component: Profile
                }
            ]
        },
        {
            path: '/',
            redirect: '/Main'
        }
    ]
})

export default router