import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import PasswordReset from '../views/Auth/PasswordReset.vue'
import NotFound from '../views/NotFound.vue'
import NewBlock from '../views/Home/NewBlock.vue'
import ProfilePage from '../views/Home/ProfilePage.vue'
import VotePage from '../views/Home/VotePage.vue'
import StatsPage from '../views/Home/StatsPage.vue'
import SuccessLogout from '../views/Auth/SuccessLogout.vue'
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
  { path: '/logout', redirect: '/success-logout' },
  { path: '/success-logout', component: SuccessLogout },
  { path: '/register', component: Register },
  { path: '/password-reset', component: PasswordReset },
  { path: '/home', component: HomePage },
  { path: '/vote', component: VotePage },
  { path: '/stats', component: StatsPage },
  { path: '/profile', component: ProfilePage },
  { path: '/new-block', component: NewBlock },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
