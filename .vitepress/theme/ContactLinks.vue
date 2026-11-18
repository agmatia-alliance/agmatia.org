<script setup lang="ts">
import { ArrowUpRight, CodeXml, Mail, MessageCircle } from '@lucide/vue'

defineProps<{
  githubLabel: string
  blueskyLabel: string
}>()
</script>

<template>
  <div class="contact-links">
    <a class="contact-link" href="mailto:contact@agmatia.org">
      <Mail :size="20" aria-hidden="true" />
      <span>contact@agmatia.org</span>
    </a>
    <a
      class="contact-link"
      href="https://github.com/agmatia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <CodeXml :size="20" aria-hidden="true" />
      <span>{{ githubLabel }}</span>
      <ArrowUpRight :size="16" aria-hidden="true" />
    </a>
    <a
      class="contact-link"
      href="https://bsky.app/profile/agmatia.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle :size="20" aria-hidden="true" />
      <span>{{ blueskyLabel }}</span>
      <ArrowUpRight :size="16" aria-hidden="true" />
    </a>
  </div>
</template>

<style scoped>
.contact-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin: 20px 0 32px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.contact-link svg:first-child {
  color: var(--agmatia-calm-cyan);
}
</style>
