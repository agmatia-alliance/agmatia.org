<script setup lang="ts">
import FeatureList from './.vitepress/theme/FeatureList.vue'

const values = [
  {
    icon: 'ideas',
    title: 'Useful over flashy',
    text: 'The work should solve a real problem and make something better for the people using it.'
  },
  {
    icon: 'reliability',
    title: 'Clear over complicated',
    text: 'Straightforward systems are easier to trust, explain, and maintain.'
  },
  {
    icon: 'collaboration',
    title: 'Open when we can',
    text: 'We share work and lessons that could help someone else.'
  }
]
</script>

# About Agmatia Alliance

We're an independent engineering collective. We like useful work, clear decisions, and software that stays understandable after it ships. We bring engineering experience to practical problems and keep the work grounded in what people actually need.

We don't start with a favorite framework or a big pile of process. We start by asking what needs to work, then figure out a sensible way to get there.

## What matters to us

<FeatureList :items="values" />

## What working together looks like

We like a clear starting point, honest conversations about constraints, and regular check-ins instead of surprises at the end. The tools and process depend on the work; the aim is always to leave behind something understandable and useful.

## Say hello

Want to talk through an idea, ask a question, or see if there's a good fit? [Get in touch](/contact).
