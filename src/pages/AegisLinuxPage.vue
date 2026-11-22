<script setup lang="ts">
const directions = [
  {
    icon: 'layers',
    number: '01',
    title: 'Atomic foundation',
    text: 'Built around an immutable Fedora Atomic base, with the system kept separate from everyday work.'
  },
  {
    icon: 'update',
    number: '02',
    title: 'Predictable updates',
    text: 'System updates should be clear, reversible, and calm enough to become ordinary.'
  },
  {
    icon: 'tune',
    number: '03',
    title: 'Useful defaults',
    text: 'A focused experience with sensible defaults, visible choices, and no disposable complexity.'
  }
]
</script>

<template>
  <div class="container page-shell aegis-page">
    <section class="aegis-project-hero">
      <div class="aegis-project-intro">
        <p class="eyebrow">Agmatia project concept</p>
        <h1>Aegis Linux</h1>
        <p class="page-lede">
          A possible Linux experience based on Fedora Atomic:
          dependable underneath, understandable above.
        </p>
      </div>

      <md-filled-card class="aegis-status-card">
        <div class="status-header">
          <span class="status-dot"></span>
          <span>Project status</span>
        </div>
        <strong>Not started</strong>
        <p>This is a concept and exploration, not a released product or available image.</p>
      </md-filled-card>
    </section>

    <section class="aegis-project-section aegis-vision">
      <div class="section-heading">
        <p class="eyebrow">The idea</p>
        <h2>A calmer kind of operating system</h2>
      </div>
      <p class="aegis-vision-copy">
        Aegis Linux starts from a simple question: how much of a system should a
        person need to understand just to use it safely? The concept explores a
        practical Fedora Atomic base, a restrained default environment, and clear
        tools for the few decisions that should remain in the user’s hands.
      </p>
    </section>

    <section class="aegis-project-section">
      <div class="section-heading">
        <p class="eyebrow">Proposed direction</p>
        <h2>What the concept is aiming for</h2>
      </div>
      <div class="aegis-direction-grid">
        <md-filled-card
          v-for="item in directions"
          :key="item.title"
          class="aegis-direction-card"
        >
          <div class="project-area-top">
            <span class="project-area-icon"><md-icon>{{ item.icon }}</md-icon></span>
            <span>{{ item.number }}</span>
          </div>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </md-filled-card>
      </div>
    </section>

    <section class="aegis-project-section aegis-boundaries">
      <div>
        <p class="eyebrow">Before any build</p>
        <h2>What it is not</h2>
      </div>
      <div class="aegis-boundary-list">
        <p><md-icon>close</md-icon> No claim of readiness or availability</p>
        <p><md-icon>close</md-icon> No hidden fork or incompatible package model</p>
        <p><md-icon>close</md-icon> No unnecessary software or irreversible defaults</p>
      </div>
    </section>

    <md-filled-card class="aegis-project-cta">
      <div>
        <p class="eyebrow">Interested in the direction?</p>
        <h2>Help shape what a useful Linux system should mean.</h2>
      </div>
      <md-filled-button @click="$router.push('/contact')">
        Start a conversation
        <md-icon slot="icon">arrow_forward</md-icon>
      </md-filled-button>
    </md-filled-card>
  </div>
</template>
