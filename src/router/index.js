import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('../components/Inicio/Login.vue')
        },
        {
            path: '/Inicio',
            name: 'Principal',
            redirect: '/Contratos',
            component: () => import('../components/Inicio/Vistas/Principal.vue'),
            children: [
                {
                    path: '/Contratos',
                    name: 'ContratosAdmin',
                    component: () => import('../components/Administrador/Contratos/Contratos.vue')
                },
                {
                    path: '/Usuarios',
                    name: 'UsuariosAdmin',
                    component: () => import('../components/Administrador/Usuarios/Usuarios.vue')
                },
                {
                    path: '/Instituciones',
                    name: 'InstitucionesAdmin',
                    component: () => import('../components/Administrador/Instituciones/Instituciones.vue')
                }
            ]
        }
    ]
})

export default router
