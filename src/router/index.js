import { createRouter, createWebHistory } from 'vue-router'

import homeView from '@/views/homeView.vue'

import serviciosView from '@/views/servicioView.vue'
import servicioDetalle from '@/views/servicioDetalle.vue'

import portafolioView from '@/views/portafolioView.vue'
import portafolioDetalle from '@/views/portafolioDetalle.vue'

import contactoView from '@/views/contactoView.vue'

const routes = [
  {path:'/', redirect:'/home'},
  {path:'/home', name:'home', component:homeView, meta:{title:'Home - JnStudios'}},

  {path:'/servicios', name:'servicios', component:serviciosView, meta:{title:'Servicios - JnStudios'}, children:[
    {path:':id', name:'servicioDetalle', component:servicioDetalle, meta:{title:'Servicios - JnStudios'}},
  ]},

  {path:'/portafolio', name:'portafolio', component:portafolioView, meta:{title:'Portafolio - JnStudios'}, children:[
    {path:':id', name:'portafolioDetalle', component:portafolioDetalle, meta:{title:'Portafolio - JnStudios'}},
  ]},
  
  {path:'/contacto', name:'contacto', component:contactoView, meta:{title:'JnStudios - Contacto'}},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
