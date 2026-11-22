<script setup lang="ts">
import { computed } from 'vue'
import { siBluesky, siGithub } from 'simple-icons'

const props = defineProps<{
  name: 'github' | 'bluesky'
}>()

const path = computed(() => (props.name === 'github' ? siGithub.path : siBluesky.path))
</script>

<template>
  <svg
    class="platform-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path :d="path" fill="currentColor" />
  </svg>
</template>
