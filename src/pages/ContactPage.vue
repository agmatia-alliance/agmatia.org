<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import PlatformIcon from '../components/PlatformIcon.vue'

useHead({
  title: 'Contact — Agmatia Alliance',
  meta: [
    { name: 'description', content: 'Contact Agmatia Alliance to discuss practical software, dependable systems, open work, or an engineering problem.' },
    { property: 'og:title', content: 'Contact — Agmatia Alliance' },
    { property: 'og:description', content: 'Contact Agmatia Alliance to discuss practical software, dependable systems, open work, or an engineering problem.' },
    { property: 'og:url', content: 'https://agmatia.org/contact' },
    { name: 'twitter:title', content: 'Contact — Agmatia Alliance' },
    { name: 'twitter:description', content: 'Contact Agmatia Alliance to discuss practical software, dependable systems, open work, or an engineering problem.' }
  ],
  link: [{ rel: 'canonical', href: 'https://agmatia.org/contact' }]
})

const email = ref('')
const subject = ref('')
const message = ref('')

function sendEmail() {
  const body = `From: ${email.value}\n\n${message.value}`
  const params = new URLSearchParams({
    subject: subject.value || 'Website inquiry',
    body
  })
  window.location.href = `mailto:contact@agmatia.org?${params.toString()}`
}
</script>

<template>
  <div class="container page-shell contact-page">
    <section class="contact-hero">
      <div class="contact-intro">
        <p class="eyebrow">Contact</p>
        <h1>Good work starts<br />with a conversation.</h1>
        <p class="page-lede">
          Have a question, a practical problem, or an idea worth exploring?
          Send a few honest lines. We do not need a polished brief.
        </p>
      </div>

      <div class="contact-availability">
        <span class="status-dot"></span>
        <div>
          <strong>Open to useful conversations</strong>
          <span>Usually reachable by email</span>
        </div>
      </div>
    </section>

    <section class="contact-layout-new">
      <md-outlined-card class="contact-form-card">
        <div class="contact-form-heading">
          <div>
            <p class="eyebrow">Compose a note</p>
            <h2>What are you working on?</h2>
          </div>
          <md-icon>edit</md-icon>
        </div>

        <form @submit.prevent="sendEmail">
          <div class="grid field-grid">
            <md-outlined-text-field
              v-model="email"
              label="Email"
              type="email"
              autocomplete="email"
              required
            />
            <md-outlined-text-field v-model="subject" label="Subject" />
          </div>
          <md-outlined-text-field
            v-model="message"
            class="message-field"
            label="What would you like to change?"
            type="textarea"
            rows="6"
            required
          />
          <div class="form-actions">
            <span>No polished brief needed.</span>
            <md-filled-button type="submit">
              Compose email
              <md-icon slot="icon">arrow_outward</md-icon>
            </md-filled-button>
          </div>
        </form>
      </md-outlined-card>

      <aside class="contact-side">
        <md-filled-card class="contact-direct-card">
          <p class="eyebrow">Direct links</p>
          <h2>Pick your channel.</h2>
          <nav class="channel-list">
            <a href="mailto:contact@agmatia.org">
              <span class="channel-icon"><md-icon>mail</md-icon></span>
              <div><strong>Email</strong><span>contact@agmatia.org</span></div>
              <md-icon class="channel-arrow">arrow_forward</md-icon>
            </a>
            <a href="https://github.com/agmatia" target="_blank" rel="noopener noreferrer">
              <span class="channel-icon"><PlatformIcon name="github" /></span>
              <div><strong>GitHub</strong><span>github.com/agmatia</span></div>
              <md-icon class="channel-arrow">open_in_new</md-icon>
            </a>
            <a href="https://bsky.app/profile/agmatia.org" target="_blank" rel="noopener noreferrer">
              <span class="channel-icon"><PlatformIcon name="bluesky" /></span>
              <div><strong>Bluesky</strong><span>@agmatia.org</span></div>
              <md-icon class="channel-arrow">open_in_new</md-icon>
            </a>
          </nav>
        </md-filled-card>

        <md-filled-card class="contact-brief-card">
          <p class="eyebrow">A useful first note</p>
          <ul>
            <li><span>01</span><p>What you are working on</p></li>
            <li><span>02</span><p>What needs to change</p></li>
            <li><span>03</span><p>What a good outcome looks like</p></li>
          </ul>
        </md-filled-card>
      </aside>
    </section>
  </div>
</template>
