---
layout: home
aside: false

hero:
  name: Agmatia Alliance
  text: Pragmatism in practice.
  tagline: We build useful software and dependable systems without making things more complicated than they need to be.
  image:
    light: /logos/nexus-symbol.svg
    dark: /logos/nexus-symbol-light.svg
    alt: Agmatia Alliance
  actions:
    - theme: brand
      text: About the alliance
      link: /about
    - theme: alt
      text: Contact us
      link: /contact
---

<script setup lang="ts">
import FeatureList from './.vitepress/theme/FeatureList.vue'

const capabilities = [
  {
    icon: 'code',
    title: 'Practical software',
    text: 'Focused tools and applications that make real tasks easier, without adding needless complexity.'
  },
  {
    icon: 'reliability',
    title: 'Dependable systems',
    text: 'Clear boundaries and steady behavior, with the less glamorous details taken care of too.'
  },
  {
    icon: 'collaboration',
    title: 'Open collaboration',
    text: 'Straightforward communication, shared learning, and useful work people can build on.'
  }
]
</script>

## What we do

### Practical by design.

We build software and systems that solve real problems. First we figure out what needs to work, then we choose a straightforward way to get there.

<FeatureList :items="capabilities" />

We take care with the small decisions that make software easier to use, hand over, and maintain. That usually means keeping scope clear and explaining the trade-offs as we go.

## How we work

- **Start with the problem:** We talk through what needs to work before reaching for tools.
- **Keep it understandable:** Clear, dependable systems are easier to use and maintain.
- **Share what we can:** We like open collaboration and making useful work easy to find.

## Open work

We share our public work on [GitHub](https://github.com/agmatia).

## Get in touch

Have a question or an idea? [Drop us a line](/contact).
