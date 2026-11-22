<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import BrandMark from './components/BrandMark.vue'
import PlatformIcon from './components/PlatformIcon.vue'

const route = useRoute()
const activePath = computed(() => route.path)
const isDark = computed(() => document.body.classList.contains('dark'))
const mobileMenu = ref<{ show: () => void } | null>(null)

const links = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'About', to: '/about', icon: 'info' },
  { label: 'Projects', to: '/projects', icon: 'folder' },
  { label: 'Contact', to: '/contact', icon: 'chat' }
]

function toggleTheme() {
  const dark = !document.body.classList.contains('dark')
  document.body.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    dark ? '#000000' : '#ffffff'
  )
}

function openMobileMenu() {
  mobileMenu.value?.show()
}
</script>

<template>
  <div class="app-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <aside class="navigation-rail" aria-label="Main navigation">
      <RouterLink class="rail-logo" to="/" aria-label="Agmatia Alliance home">
        <BrandMark />
      </RouterLink>

      <nav class="rail-items">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rail-item"
          :class="{ active: activePath === link.to }"
        >
          <span class="rail-icon"><md-icon>{{ link.icon }}</md-icon></span>
          <span>{{ link.label }}</span>
        </RouterLink>
      </nav>

      <nav class="rail-social" aria-label="Social links">
        <md-icon-button
          href="https://github.com/agmatia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agmatia Alliance on GitHub"
        >
          <PlatformIcon name="github" />
        </md-icon-button>
        <md-icon-button
          href="https://bsky.app/profile/agmatia.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agmatia Alliance on Bluesky"
        >
          <PlatformIcon name="bluesky" />
        </md-icon-button>
        <md-icon-button aria-label="Toggle color theme" @click="toggleTheme">
          <md-icon>{{ isDark ? 'light_mode' : 'dark_mode' }}</md-icon>
        </md-icon-button>
      </nav>
    </aside>

    <header class="mobile-header">
      <RouterLink class="brand" to="/" aria-label="Agmatia Alliance home">
        <BrandMark />
        <span>AGMATIA ALLIANCE</span>
      </RouterLink>

      <div class="mobile-header-actions">
        <md-icon-button aria-label="Toggle color theme" @click="toggleTheme">
          <md-icon>{{ isDark ? 'light_mode' : 'dark_mode' }}</md-icon>
        </md-icon-button>
        <md-icon-button
          id="mobile-menu-button"
          aria-label="Open navigation menu"
          aria-haspopup="menu"
          @click="openMobileMenu"
        >
          <md-icon>menu</md-icon>
        </md-icon-button>
      </div>
    </header>

    <div class="mobile-menu-anchor">
      <md-menu ref="mobileMenu" anchor="mobile-menu-button" has-overflow>
        <md-menu-item
          v-for="link in links"
          :key="link.to"
          :headline="link.label"
          :selected="activePath === link.to"
          @click="$router.push(link.to)"
        >
          <md-icon slot="start">{{ link.icon }}</md-icon>
          <span>{{ link.label }}</span>
        </md-menu-item>
      </md-menu>
    </div>

    <main id="main-content" class="app-main">
      <RouterView />
    </main>

    <footer class="app-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <RouterLink to="/" aria-label="Agmatia Alliance home">
            <img
              class="footer-horizontal-logo"
              src="/logos/nexus-horizontal.svg"
              alt="Agmatia Alliance"
            />
          </RouterLink>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <RouterLink to="/"><md-icon>home</md-icon><span>Home</span></RouterLink>
          <RouterLink to="/about"><md-icon>info</md-icon><span>About</span></RouterLink>
          <RouterLink to="/projects"><md-icon>folder</md-icon><span>Projects</span></RouterLink>
          <RouterLink to="/contact"><md-icon>chat</md-icon><span>Contact</span></RouterLink>
        </nav>

        <nav class="footer-social" aria-label="Social links">
          <a href="https://github.com/agmatia" target="_blank" rel="noopener noreferrer">
            <PlatformIcon name="github" /> GitHub
          </a>
          <a href="https://bsky.app/profile/agmatia.org" target="_blank" rel="noopener noreferrer">
            <PlatformIcon name="bluesky" /> Bluesky
          </a>
        </nav>

        <span class="footer-copyright">
          © 2026 Agmatia Alliance · ТОВ Agmatia Alliance (registration planned) · contact@agmatia.org
        </span>
      </div>
    </footer>
  </div>
</template>
