import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Login',
      component:()=>import('../components/Inicio/Login.vue')
    },
    {
      path:'/VistaPrincipal',
      name:'Principal',
      component:()=>import('../components/Inicio/Vistas/Principal.vue'),
      children:[
        {
          path:'/ContratosAdmin',
          name:'ContratosAdmin',
          component:()=>import('../components/Administrador/Contratos/Contratos.vue')
        },
        {
          path:'/UsuariosAdmin',
          name:'UsuariosAdmin',
          component:()=>import('../components/Administrador/Usuarios/Usuarios.vue')
        },
        {
          path:'/InstitucionesAdmin',
          name:'InstitucionesAdmin',
          component:()=>import('../components/Administrador/Instituciones/Instituciones.vue')
        }
      ]
    }
  ]
})

export default router
