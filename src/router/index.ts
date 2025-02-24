import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import PasswordReset from '../views/Auth/PasswordReset.vue'
import Home from '../views/Home/Home.vue'
import Vote from '../views/Home/Vote.vue'
import Stats from '../views/Home/Stats.vue'
import Profile from '../views/Home/Profile.vue'
import NotFound from '../views/Auth/NotFound.vue'
  import NewBlock from '../views/Home/NewBlock.vue'
const routes: Array<RouteRecordRaw> = [
  /*
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }
  */
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/password-reset', component: PasswordReset },
  { path: '/home', component: Home },
  { path: '/vote', component: Vote },
  { path: '/stats', component: Stats },
  // ahora hay que meter el 404
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/profile', component: Profile },
  { path: '/new-block', component: NewBlock },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
