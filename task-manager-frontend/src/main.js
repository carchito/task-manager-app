import { createApp } from 'vue'
import './main.css';
import App from './App.vue';
import * as VueRouter from 'vue-router'
import PaginaPrincipal from './components/PaginaPrincipal.vue';
import PaginaLogin from './components/PaginaLogin.vue';
import PaginaTareas from './components/PaginaTareas.vue';
import NuevaTarea from './components/NuevaTarea.vue';

createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/',
    component: PaginaPrincipal
  },{
    path: '/login',
    component: PaginaLogin
  },{
    path: '/tareas',
    component: PaginaTareas
  },{
    path: '/nuevatarea',
    component: NuevaTarea
  }]
}))
.mount('#app')