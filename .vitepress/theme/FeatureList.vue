<script setup lang="ts">
import {
  CodeXml,
  GitBranch,
  HeartHandshake,
  Lightbulb,
  Network,
  ShieldCheck
} from '@lucide/vue'

const icons = {
  code: CodeXml,
  branch: GitBranch,
  collaboration: HeartHandshake,
  ideas: Lightbulb,
  network: Network,
  reliability: ShieldCheck
} as const

interface Feature {
  icon: keyof typeof icons
  title: string
  text: string
}

defineProps<{
  items: Feature[]
}>()
</script>

<template>
  <div class="feature-list">
    <article v-for="item in items" :key="item.title" class="feature-item">
      <component
        :is="icons[item.icon]"
        class="feature-icon"
        :size="20"
        :stroke-width="1.75"
        aria-hidden="true"
      />
      <div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </article>
  </div>
</template>

<style scoped>
.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px 32px;
  margin: 24px 0 32px;
}

.feature-item {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  align-items: start;
  gap: 12px;
}

.feature-icon {
  margin-top: 3px;
  color: var(--agmatia-calm-cyan);
}

.feature-item h3 {
  margin: 0 0 6px;
  font-size: 18px;
  line-height: 1.4;
}

.feature-item p {
  margin: 0;
  color: var(--vt-c-text-2);
}
</style>
