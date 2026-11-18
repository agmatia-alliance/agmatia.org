---
layout: home
aside: false

hero:
  name: Agmatia Alliance
  text: Pragmatismus in der Praxis.
  tagline: Wir entwickeln nützliche Software und zuverlässige Systeme – ohne die Dinge unnötig kompliziert zu machen.
  image:
    light: /logos/nexus-symbol.svg
    dark: /logos/nexus-symbol-light.svg
    alt: Agmatia Alliance
  actions:
    - text: Über uns
      link: /de/about
    - text: Kontakt
      link: /de/contact
---

<script setup lang="ts">
import FeatureList from '../.vitepress/theme/FeatureList.vue'

const capabilities = [
  {
    icon: 'code',
    title: 'Praktische Software',
    text: 'Gezielte Werkzeuge und Anwendungen, die echte Aufgaben erleichtern, ohne unnötige Komplexität.'
  },
  {
    icon: 'reliability',
    title: 'Zuverlässige Systeme',
    text: 'Klare Grenzen und berechenbares Verhalten – auch die weniger glamourösen Details behalten wir im Blick.'
  },
  {
    icon: 'collaboration',
    title: 'Offene Zusammenarbeit',
    text: 'Direkte Kommunikation, gemeinsames Lernen und nützliche Arbeit, auf der andere aufbauen können.'
  }
]
</script>

## Was wir tun

### Praktisch gedacht

Wir entwickeln Software und Systeme, die echte Probleme lösen. Zuerst klären wir, was funktionieren muss, und suchen dann einen geraden Weg zum Ziel.

<FeatureList :items="capabilities" />

Auch die kleinen Entscheidungen zählen: Sie machen Software leichter nutzbar, einfacher zu übergeben und besser zu warten. Deshalb halten wir den Umfang klar und erklären die Abwägungen unterwegs.

## So arbeiten wir

- **Erst das Problem:** Wir klären, was gebraucht wird, bevor wir Werkzeuge auswählen.
- **Verständlich bleiben:** Klare, zuverlässige Systeme lassen sich leichter nutzen und warten.
- **Wissen teilen:** Offene Zusammenarbeit hilft guten Ideen weiter.

## Offene Arbeit

Unsere öffentliche Arbeit findet ihr auf [GitHub](https://github.com/agmatia).

## Kontakt

Fragen oder eine Idee? [Schreib uns](/de/contact).
