import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@unhead/vue/client'
import '@material/web/button/filled-button.js'
import '@material/web/button/filled-tonal-button.js'
import '@material/web/button/text-button.js'
import '@material/web/icon/icon.js'
import '@material/web/iconbutton/icon-button.js'
import '@material/web/menu/menu.js'
import '@material/web/menu/menu-item.js'
import '@material/web/labs/card/elevated-card.js'
import '@material/web/labs/card/filled-card.js'
import '@material/web/labs/card/outlined-card.js'
import '@material/web/textfield/outlined-text-field.js'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/ibm-plex-sans/latin-700.css'
import './styles.css'

import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import ContactPage from './pages/ContactPage.vue'
import AegisLinuxPage from './pages/AegisLinuxPage.vue'

const savedTheme = localStorage.getItem('theme')
const preferredTheme =
  savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage, meta: { title: 'Agmatia Alliance' } },
    { path: '/about', component: AboutPage, meta: { title: 'About' } },
    { path: '/projects', component: ProjectsPage, meta: { title: 'Projects' } },
    { path: '/projects/aegis-linux', component: AegisLinuxPage, meta: { title: 'Aegis Linux' } },
    { path: '/contact', component: ContactPage, meta: { title: 'Contact' } },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'Agmatia Alliance'
  document.title =
    title === 'Agmatia Alliance' ? title : `${title} — Agmatia Alliance`
})

document.body.classList.toggle('dark', preferredTheme === 'dark')

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.mount('#app')
