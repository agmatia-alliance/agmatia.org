<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Projects — Agmatia Alliance',
  meta: [
    { name: 'description', content: 'Explore practical software, dependable systems, and open work from Agmatia Alliance.' },
    { property: 'og:title', content: 'Projects — Agmatia Alliance' },
    { property: 'og:description', content: 'Explore practical software, dependable systems, and open work from Agmatia Alliance.' },
    { property: 'og:url', content: 'https://agmatia.org/projects' },
    { name: 'twitter:title', content: 'Projects — Agmatia Alliance' },
    { name: 'twitter:description', content: 'Explore practical software, dependable systems, and open work from Agmatia Alliance.' }
  ],
  link: [{ rel: 'canonical', href: 'https://agmatia.org/projects' }]
})

const areas = [
  {
    icon: 'code',
    number: '01',
    title: 'Small, useful tools',
    text: 'Software that removes friction from a real task and stays simple enough to keep improving.'
  },
  {
    icon: 'link',
    number: '02',
    title: 'Systems that fit',
    text: 'Clear parts that cooperate without making the whole system harder to understand.'
  },
  {
    icon: 'fork_right',
    number: '03',
    title: 'Work worth sharing',
    text: 'Open projects, experiments, and notes that can help someone solve a similar problem.'
  }
]

const criteria = [
  {
    icon: 'my_location',
    title: 'A clear need',
    text: 'We can explain who feels the problem and why it matters.'
  },
  {
    icon: 'aspect_ratio',
    title: 'A sensible scope',
    text: 'The first useful version can be named, built, and handed over.'
  },
  {
    icon: 'all_inclusive',
    title: 'A useful life',
    text: 'The result should still matter after the first release.'
  }
]
</script>

<template>
  <div class="container page-shell projects-page">
    <section class="projects-hero">
      <div class="projects-intro">
        <p class="eyebrow">Projects</p>
        <h1>Things made to be useful.</h1>
        <p class="page-lede">
          Practical software, dependable systems, and open work.
          This page grows slowly, on purpose.
        </p>
      </div>

      <md-filled-card class="projects-status">
        <div class="status-header">
          <span class="status-dot"></span>
          <span>Current status</span>
        </div>
        <strong>Building thoughtfully</strong>
        <p>We share work when it has a stable public home, not before.</p>
      </md-filled-card>
    </section>

    <section class="projects-section areas-section">
      <div class="section-heading">
        <p class="eyebrow">Areas of work</p>
        <h2>Where we tend to play</h2>
      </div>

      <div class="project-area-grid">
        <md-filled-card
          v-for="area in areas"
          :key="area.title"
          class="project-area-card"
        >
          <div class="project-area-top">
            <span class="project-area-icon"><md-icon>{{ area.icon }}</md-icon></span>
            <span>{{ area.number }}</span>
          </div>
          <div>
            <h3>{{ area.title }}</h3>
            <p>{{ area.text }}</p>
          </div>
        </md-filled-card>
      </div>
    </section>

    <section class="projects-section aegis-section">
      <md-outlined-card class="aegis-card">
        <div class="aegis-atmosphere" aria-hidden="true"></div>
        <div class="aegis-copy">
          <span class="concept-chip">Concept</span>
          <p class="eyebrow">Exploration</p>
          <h2>Aegis Linux</h2>
          <p>
            A possible future Linux project for people who want a clearer,
            more dependable system. Development has not begun.
          </p>
          <div class="aegis-meta">
            <span>Status</span>
            <strong>Not started</strong>
          </div>
        </div>
        <div class="aegis-art" aria-hidden="true">
          <span class="aegis-ring ring-one"></span>
          <span class="aegis-ring ring-two"></span>
          <md-icon>shield</md-icon>
        </div>
        <md-text-button
          class="aegis-page-link"
          @click="$router.push('/projects/aegis-linux')"
        >
          Read the concept
          <md-icon slot="icon">arrow_forward</md-icon>
        </md-text-button>
      </md-outlined-card>
    </section>

    <section class="projects-section selection-section">
      <div class="section-heading">
        <p class="eyebrow">How we choose</p>
        <h2>Three things before we build</h2>
      </div>

      <div class="selection-grid">
        <article v-for="item in criteria" :key="item.title" class="selection-item">
          <md-icon>{{ item.icon }}</md-icon>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <md-filled-card class="projects-cta">
      <div>
        <p class="eyebrow">Have a real need?</p>
        <h2>Tell us what needs to get easier.</h2>
      </div>
      <md-filled-button @click="$router.push('/contact')">
        Start a conversation
        <md-icon slot="icon">arrow_forward</md-icon>
      </md-filled-button>
    </md-filled-card>
  </div>
</template>
