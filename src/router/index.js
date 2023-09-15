import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/prijava',
    name: 'Prijava',
    component: () => import(/* webpackChunkName: "prijava" */ '../views/Prijava.vue')
  },
  {
    path: '/unos',
    name: 'UnosNarudzbe',
    component: () => import(/* webpackChunkName: "unos" */ '../views/UnosNarudzbe.vue')
  },
  {
    path: '/cekanje',
    name: 'NarudzbeNaCekanju',
    component: () => import(/* webpackChunkName: "narudzbenacekanju" */ '../views/NarudzbeNaCekanju.vue')
  },
  {
    path: '/obrnarudzbe',
    name: 'ObradeneNarudzbe',
    component: () => import(/* webpackChunkName: "obradenenarudzbe" */ '../views/ObradeneNarudzbe.vue')
  },
  {
    path: '/narudzbeuobr',
    name: 'NarudzbeUObradi',
    component: () => import(/* webpackChunkName: "narudzbeuobradi" */ '../views/NarudzbeUObradi.vue')
  },
  {
    path: '/registracija',
    name: 'Registracija',
    component: () => import(/* webpackChunkName: "registracija" */ '../views/Registracija.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
