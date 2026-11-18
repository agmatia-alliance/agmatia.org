<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { VPTheme } from '@vue/theme'
import { useData } from 'vitepress'
import { computed, onMounted, watch } from 'vue'
import SiteFooter from './SiteFooter.vue'

interface HeroAction {
  text: string
  link: string
  target?: string
  rel?: string
}

interface HeroConfig {
  name?: string
  text?: string
  tagline?: string
  image?: {
    light?: string
    dark?: string
    alt?: string
  }
  actions?: HeroAction[]
}

const ThemeLayout = VPTheme.Layout
const { frontmatter, localeIndex, site } = useData()
const hero = computed(() => frontmatter.value.hero as HeroConfig | undefined)
const homeLink = computed(() =>
  localeIndex.value === 'root'
    ? '/'
    : site.value.locales[localeIndex.value]?.link || `/${localeIndex.value}/`
)
const heroImages = computed(() => {
  const image = hero.value?.image
  if (!image) return

  return {
    light: image.light || image.dark,
    dark: image.dark || image.light,
    alt: image.alt || ''
  }
})

const updateLogoHomeLink = () => {
  document
    .querySelector<HTMLAnchorElement>('.VPNavBarTitle')
    ?.setAttribute('href', homeLink.value)
}

onMounted(updateLogoHomeLink)
watch(homeLink, updateLogoHomeLink, { flush: 'post' })
</script>

<template>
  <div class="agmatia-shell">
    <component :is="ThemeLayout">
      <template #navbar-title>
        <img
          class="agmatia-light-mark"
          src="/logos/nexus-symbol.svg"
          width="24"
          height="24"
          alt=""
        />
        <img
          class="agmatia-dark-mark"
          src="/logos/nexus-symbol-light.svg"
          width="24"
          height="24"
          alt=""
        />
        <span class="brand-title">AGMATIA ALLIANCE</span>
      </template>

      <template #content-top>
        <section v-if="hero" class="home-hero vt-doc">
          <div class="hero-copy">
            <p v-if="hero.name" class="hero-name">{{ hero.name }}</p>
            <h1 v-if="hero.text">{{ hero.text }}</h1>
            <p v-if="hero.tagline" class="hero-tagline">{{ hero.tagline }}</p>
            <div v-if="hero.actions?.length" class="hero-actions">
              <a
                v-for="action in hero.actions"
                :key="action.link"
                :href="action.link"
                :target="action.target"
                :rel="action.rel"
              >
                {{ action.text }}
                <ArrowRight :size="16" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div v-if="heroImages?.light || heroImages?.dark" class="hero-image">
            <img
              v-if="heroImages?.light"
              class="agmatia-light-mark"
              :src="heroImages.light"
              :alt="heroImages.alt"
              width="96"
              height="96"
            />
            <img
              v-if="heroImages?.dark"
              class="agmatia-dark-mark"
              :src="heroImages.dark"
              :alt="heroImages.alt"
              width="96"
              height="96"
            />
          </div>
        </section>
      </template>
    </component>
    <SiteFooter />
  </div>
</template>

<style>
.agmatia-shell {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--vt-c-bg);
}

.agmatia-shell .VPApp {
  flex: 1;
  min-height: 0;
}

.agmatia-shell .VPContent {
  flex: 1;
}

.agmatia-dark-mark {
  display: none;
}

html.dark .agmatia-light-mark {
  display: none;
}

html.dark .agmatia-dark-mark {
  display: inline;
}
</style>

<style scoped>
.home-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 120px;
  align-items: center;
  gap: 32px;
  margin-bottom: 48px;
}

.home-hero h1 {
  margin: 0 0 16px;
}

.hero-name {
  margin: 0 0 8px;
  color: var(--agmatia-calm-cyan);
}

.hero-tagline {
  margin: 0 0 20px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.hero-actions a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.hero-actions svg {
  flex: none;
}

.hero-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image img {
  width: 96px;
  height: 96px;
  object-fit: contain;
}

.brand-title {
  margin-left: 8px;
  color: var(--agmatia-calm-cyan);
}

@media (max-width: 640px) {
  .home-hero {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .hero-image {
    grid-row: 1;
    justify-content: flex-start;
  }

  .hero-image img {
    width: 64px;
    height: 64px;
  }
}
</style>
