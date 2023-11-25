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
      component:()=>import('../components/Inicio/Vistas/Principal.vue')
    }
  ]
})

export default router
