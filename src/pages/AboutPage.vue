<script setup lang="ts">
const principles = [
  {
    icon: 'lightbulb',
    index: '01',
    title: 'Useful over flashy',
    text: 'The work should solve a real problem and make something better for the people using it.'
  },
  {
    icon: 'verified',
    index: '02',
    title: 'Clear over complicated',
    text: 'Straightforward systems are easier to trust, explain, maintain, and hand over.'
  },
  {
    icon: 'groups',
    index: '03',
    title: 'Open when we can',
    text: 'We share what we learn and make useful work easy for other people to find.'
  }
]

const process = [
  {
    icon: 'my_location',
    title: 'Find the real starting point',
    text: 'We clarify what needs to work, who it affects, and which constraints are genuinely fixed.'
  },
  {
    icon: 'route',
    title: 'Choose the simplest sensible path',
    text: 'We reduce scope, document trade-offs, and use the tools that fit the problem.'
  },
  {
    icon: 'handshake',
    title: 'Stay close while it becomes real',
    text: 'Regular check-ins keep decisions visible and prevent avoidable surprises at the end.'
  }
]
</script>

<template>
  <div class="container page-shell about-page">
    <section class="about-hero">
      <div class="about-intro">
        <p class="eyebrow">About</p>
        <h1>Built for useful work.</h1>
        <p class="page-lede">
          Agmatia Alliance is an independent engineering collective for practical software and dependable systems.
        </p>
      </div>

      <md-filled-card class="about-manifesto">
        <span class="manifesto-label">Our starting point</span>
        <p>
          Do not begin with a framework, a process, or a stack. Begin with the problem.
        </p>
      </md-filled-card>
    </section>

    <p class="about-story">
      We bring engineering experience to real problems and keep the work grounded in what people actually need.
      We value clear decisions, careful implementation, and software that remains understandable after it ships.
    </p>

    <section class="about-section">
      <div class="section-heading">
        <p class="eyebrow">People</p>
        <h2>One person. Independent work.</h2>
      </div>

      <md-outlined-card class="member-card about-member">
        <div class="member-identity">
          <img
            src="https://github.com/andriymurha.png"
            alt="Andriy Murha"
            width="112"
            height="112"
          />
          <div>
            <span class="member-status">Founder</span>
            <h3>Andriy Murha</h3>
            <p class="role">Systems Engineer &amp; Backend Developer</p>
          </div>
        </div>

        <div class="member-bio">
          <p>
            Independent systems engineer focused on clear boundaries, dependable software,
            and practical decisions from design through operation.
          </p>
          <div class="member-actions">
            <md-icon-button
              href="https://github.com/andriymurha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Andriy Murha on GitHub"
            >
              <md-icon>code</md-icon>
            </md-icon-button>
            <md-icon-button
              href="https://bsky.app/profile/andrew.agmatia.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Andriy Murha on Bluesky"
            >
              <md-icon>chat</md-icon>
            </md-icon-button>
          </div>
        </div>
      </md-outlined-card>
    </section>

    <section class="about-section principles-section">
      <div class="section-heading">
        <p class="eyebrow">Principles</p>
        <h2>What matters to us</h2>
      </div>

      <div class="principle-grid">
        <md-filled-card
          v-for="item in principles"
          :key="item.title"
          class="principle-card"
        >
          <div class="principle-top">
            <md-icon>{{ item.icon }}</md-icon>
            <span>{{ item.index }}</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </md-filled-card>
      </div>
    </section>

    <section class="about-section process-section">
      <div class="section-heading">
        <p class="eyebrow">Working together</p>
        <h2>Clear from the first conversation</h2>
      </div>

      <div class="process-grid">
        <article v-for="(item, index) in process" :key="item.title" class="process-step">
          <div class="process-marker">
            <span>{{ index + 1 }}</span>
            <md-icon>{{ item.icon }}</md-icon>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <md-filled-card class="about-cta">
      <div>
        <p class="eyebrow">Start a conversation</p>
        <h2>Have a useful problem to solve?</h2>
      </div>
      <md-filled-button @click="$router.push('/contact')">
        Get in touch
        <md-icon slot="icon">arrow_forward</md-icon>
      </md-filled-button>
    </md-filled-card>
  </div>
</template>
