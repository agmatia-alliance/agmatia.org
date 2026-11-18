---
layout: home
aside: false

hero:
  name: Agmatia Alliance
  text: Pragmatismo en la práctica.
  tagline: Creamos software útil y sistemas fiables sin complicar las cosas más de lo necesario.
  image:
    light: /logos/nexus-symbol.svg
    dark: /logos/nexus-symbol-light.svg
    alt: Agmatia Alliance
  actions:
    - theme: brand
      text: Sobre la alianza
      link: /es/about
    - theme: alt
      text: Contactar
      link: /es/contact
---

<script setup lang="ts">
import FeatureList from '../.vitepress/theme/FeatureList.vue'

const capabilities = [
  {
    icon: 'code',
    title: 'Software práctico',
    text: 'Herramientas específicas que facilitan tareas reales sin añadir complejidad innecesaria.'
  },
  {
    icon: 'reliability',
    title: 'Sistemas fiables',
    text: 'Límites claros y un comportamiento predecible, también en los detalles menos visibles.'
  },
  {
    icon: 'collaboration',
    title: 'Colaboración abierta',
    text: 'Comunicación directa, aprendizaje compartido y trabajo útil sobre el que otras personas puedan construir.'
  }
]
</script>

## Qué hacemos

### Diseñado para ser práctico.

Creamos software y sistemas que resuelven problemas reales. Primero aclaramos qué debe funcionar y después buscamos una forma sencilla de conseguirlo.

<FeatureList :items="capabilities" />

Cuidamos las pequeñas decisiones que hacen que el software sea más fácil de usar, entregar y mantener. Eso suele significar definir bien el alcance y explicar las decisiones durante el proceso.

## Cómo trabajamos

- **Empezamos por el problema:** aclaramos qué hace falta antes de elegir las herramientas.
- **Lo mantenemos comprensible:** los sistemas claros y fiables son más fáciles de usar y mantener.
- **Compartimos lo que podemos:** la colaboración abierta ayuda a que las buenas ideas lleguen más lejos.

## Trabajo abierto

Compartimos nuestro trabajo público en [GitHub](https://github.com/agmatia).

## Hablemos

¿Tienes una pregunta o una idea? [Escríbenos](/es/contact).
