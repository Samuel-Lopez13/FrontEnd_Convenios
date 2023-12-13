import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            redirect: '/IniciarSesion',
            component: () => import('../components/Inicio/Login.vue'),
            children:[
                {
                    path:'/IniciarSesion',
                    name:'Log In',
                    component:()=>import('../components/Inicio/Login/InicioSesion.vue')
                },
                {
                    path: '/RecuperarClave',
                    name: 'RecuperarClave',
                    component:()=>import('../components/Inicio/Login/Contraeña/RecuperarClave.vue')

                },
                {
                    path:'/VerificarCodigo',
                    name:'VerificarCodigo',
                    component:()=>import('../components/Inicio/Login/Contraeña/VerificarCodigo.vue')
                },
                {
                    path:'/ReestablecerClave',
                    name:'ReestablecerClave',
                    component:()=>import('../components/Inicio/Login/Contraeña/ReestablecerClave.vue')
                },

            ]
        },
        {
            path: '/Inicio',
            name: 'Principal',
            redirect: '/Instituciones',
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
                },
                {
                    path: '/Terminos',
                    name: 'Terminos',
                    component: () => import('../components/Usuarios/Terminos.vue')
                },
                {
                    path:'/Contrato/:idContrato',
                    name:'Contrato',
                    component:()=>import('../components/Usuarios/ContratosView.vue')
                }
            ]
        }
    ]
})

export default router
