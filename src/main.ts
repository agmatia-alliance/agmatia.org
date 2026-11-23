import { ViteSSG } from 'vite-ssg'
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

const routes = [
    {
      path: '/',
      component: HomePage,
      meta: {
        title: 'Agmatia Alliance',
        description: 'Agmatia Alliance builds useful software and dependable systems through pragmatic, independent engineering.'
      }
    },
    {
      path: '/about',
      component: AboutPage,
      meta: {
        title: 'About',
        description: 'Meet Agmatia Alliance and learn how our independent engineering collective builds practical software and dependable systems.'
      }
    },
    {
      path: '/projects',
      component: ProjectsPage,
      meta: {
        title: 'Projects',
        description: 'Explore practical software, dependable systems, and open work from Agmatia Alliance.'
      }
    },
    {
      path: '/projects/aegis-linux',
      component: AegisLinuxPage,
      meta: {
        title: 'Aegis Linux',
        description: 'Learn about the Aegis Linux concept: a possible Fedora Atomic-based Linux experience focused on clarity and dependable systems.'
      }
    },
    {
      path: '/contact',
      component: ContactPage,
      meta: {
        title: 'Contact',
        description: 'Contact Agmatia Alliance to discuss practical software, dependable systems, open work, or an engineering problem.'
      }
    },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior() {
      return { top: 0 }
    }
  },
  ({ router, isClient }) => {
    if (!isClient)
      return

    const savedTheme = localStorage.getItem('theme')
    const preferredTheme =
      savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'

    document.body.classList.toggle('dark', preferredTheme === 'dark')

    router.afterEach((to) => {
      const title = typeof to.meta.title === 'string' ? to.meta.title : 'Agmatia Alliance'
      document.title =
        title === 'Agmatia Alliance' ? title : `${title} — Agmatia Alliance`
    })
  }
)

export async function includedRoutes() {
  return routes
    .map(route => route.path)
    .filter(path => !path.includes(':'))
}
