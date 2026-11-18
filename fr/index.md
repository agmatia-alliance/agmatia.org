---
layout: home
aside: false

hero:
  name: Agmatia Alliance
  text: Le pragmatisme en pratique.
  tagline: Nous créons des logiciels utiles et des systèmes fiables, sans les compliquer inutilement.
  image:
    light: /logos/nexus-symbol.svg
    dark: /logos/nexus-symbol-light.svg
    alt: Agmatia Alliance
  actions:
    - theme: brand
      text: À propos de l’alliance
      link: /fr/about
    - theme: alt
      text: Nous contacter
      link: /fr/contact
---

<script setup lang="ts">
import FeatureList from '../.vitepress/theme/FeatureList.vue'

const capabilities = [
  {
    icon: 'code',
    title: 'Des logiciels pratiques',
    text: 'Des outils ciblés qui facilitent les tâches réelles sans ajouter de complexité inutile.'
  },
  {
    icon: 'reliability',
    title: 'Des systèmes fiables',
    text: 'Des limites claires et un comportement prévisible, jusque dans les détails moins visibles.'
  },
  {
    icon: 'collaboration',
    title: 'Une collaboration ouverte',
    text: 'Des échanges directs, des apprentissages partagés et un travail utile sur lequel chacun peut s’appuyer.'
  }
]
</script>

## Ce que nous faisons

### L’utilité d’abord.

Nous créons des logiciels et des systèmes qui répondent à de vrais problèmes. Nous commençons par définir ce qui doit fonctionner, puis choisissons une solution simple et adaptée.

<FeatureList :items="capabilities" />

Nous soignons aussi les petits choix qui rendent un logiciel plus facile à utiliser, à transmettre et à maintenir. Cela implique de garder un périmètre clair et d’expliquer les compromis au fil du travail.

## Notre façon de travailler

- **Partir du problème :** nous définissons le besoin avant de choisir les outils.
- **Rester compréhensible :** des systèmes clairs et fiables sont plus faciles à utiliser et à maintenir.
- **Partager ce qui peut l’être :** la collaboration ouverte aide les bonnes idées à circuler.

## Travail ouvert

Nous partageons nos projets publics sur [GitHub](https://github.com/agmatia).

## Parlons-en

Une question ou une idée ? [Écrivez-nous](/fr/contact).
