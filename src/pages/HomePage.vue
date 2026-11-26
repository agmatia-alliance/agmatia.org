<script setup lang="ts">
import { useHead } from '@unhead/vue'
import BrandMark from '../components/BrandMark.vue'

useHead({
  title: 'Agmatia Alliance',
  meta: [
    { name: 'description', content: 'Agmatia Alliance builds useful software and dependable systems through pragmatic, independent engineering.' },
    { property: 'og:title', content: 'Agmatia Alliance' },
    { property: 'og:description', content: 'Agmatia Alliance builds useful software and dependable systems through pragmatic, independent engineering.' },
    { property: 'og:url', content: 'https://agmatia.org/' },
    { name: 'twitter:title', content: 'Agmatia Alliance' },
    { name: 'twitter:description', content: 'Agmatia Alliance builds useful software and dependable systems through pragmatic, independent engineering.' }
  ],
  link: [{ rel: 'canonical', href: 'https://agmatia.org/' }]
})

const capabilities = [
  {
    icon: 'code',
    index: '01',
    title: 'Practical software',
    text: 'Focused tools and applications that make real tasks easier, without adding machinery nobody asked for.',
    featured: true
  },
  {
    icon: 'verified',
    index: '02',
    title: 'Dependable systems',
    text: 'Clear boundaries, predictable behavior, and care for the unglamorous details.'
  },
  {
    icon: 'groups',
    index: '03',
    title: 'Open collaboration',
    text: 'Straightforward communication and useful work that people can understand and build on.'
  }
]

const process = [
  {
    number: '01',
    icon: 'my_location',
    title: 'Start with the problem',
    text: 'We find out what actually needs to work before anyone reaches for tools.'
  },
  {
    number: '02',
    icon: 'route',
    title: 'Keep the path clear',
    text: 'Small decisions stay visible, scope stays honest, and complexity earns its place.'
  },
  {
    number: '03',
    icon: 'handshake',
    title: 'Build and check in',
    text: 'Regular conversations keep the work useful and avoid surprises at the finish.'
  }
]
</script>

<template>
  <div class="container home-page">
    <section class="home-hero">
      <div class="hero-atmosphere" aria-hidden="true">
        <span class="atmosphere-orb atmosphere-orb-one"></span>
        <span class="atmosphere-orb atmosphere-orb-two"></span>
      </div>

      <div class="home-intro">
        <p class="eyebrow">
          <span class="status-dot"></span>
          Independent engineering collective
        </p>
        <h1>Pragmatism in practice.</h1>
        <p class="hero-lede">
          We build useful software and dependable systems.
          No favorite framework. No ceremony for its own sake.
        </p>
        <div class="actions">
          <md-filled-button @click="$router.push('/about')">
            About the alliance
            <md-icon slot="icon">arrow_forward</md-icon>
          </md-filled-button>
          <md-filled-tonal-button @click="$router.push('/contact')">
            Start a conversation
          </md-filled-tonal-button>
        </div>
      </div>

      <md-outlined-card class="hero-card">
        <div class="hero-card-grid" aria-hidden="true"></div>
        <div class="hero-symbol-wrap">
          <span class="symbol-halo"></span>
          <BrandMark class="hero-symbol" />
        </div>
        <div class="hero-card-caption">
          <span>Software</span>
          <span>Systems</span>
          <span>Open work</span>
        </div>
      </md-outlined-card>
    </section>

    <section class="home-section capabilities-section">
      <div class="section-heading home-heading">
        <div>
          <p class="eyebrow">What we do</p>
          <h2>Useful work, plainly made.</h2>
        </div>
        <p>From a small tool to a system that has to keep working, we aim for the same thing: something clear, steady, and worth keeping.</p>
      </div>

      <div class="capability-grid">
        <md-filled-card
          v-for="item in capabilities"
          :key="item.title"
          class="capability-card"
          :class="{ featured: item.featured }"
        >
          <div class="capability-top">
            <span class="capability-icon">
              <md-icon>{{ item.icon }}</md-icon>
            </span>
            <span class="capability-index">{{ item.index }}</span>
          </div>
          <div class="capability-copy">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </md-filled-card>
      </div>
    </section>

    <section class="home-section process-section-home">
      <div class="section-heading home-heading">
        <div>
          <p class="eyebrow">How we work</p>
          <h2>Less theater. More signal.</h2>
        </div>
      </div>

      <div class="home-process-grid">
        <article v-for="item in process" :key="item.title" class="home-process-step">
          <div class="home-process-marker">
            <span>{{ item.number }}</span>
            <md-icon>{{ item.icon }}</md-icon>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="home-section home-bottom-grid">
      <md-filled-card class="open-work-card">
        <div class="open-work-copy">
          <p class="eyebrow">Open work</p>
          <h2>Useful things should be easy to find.</h2>
          <p>
            We share public work on GitHub and add a project here when it is ready for people to actually use or explore.
          </p>
        </div>
        <md-text-button
          href="https://github.com/agmatia"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub
          <md-icon slot="icon">open_in_new</md-icon>
        </md-text-button>
      </md-filled-card>

      <md-filled-card class="home-contact-card">
        <div class="contact-glow" aria-hidden="true"></div>
        <p class="eyebrow">Good systems start here</p>
        <h2>Have a problem worth thinking about?</h2>
        <md-filled-button @click="$router.push('/contact')">
          Say hello
          <md-icon slot="icon">arrow_forward</md-icon>
        </md-filled-button>
      </md-filled-card>
    </section>
  </div>
</template>
