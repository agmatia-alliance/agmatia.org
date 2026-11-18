<script setup lang="ts">
import { ArrowUpRight, CodeXml, Mail, MessageCircle } from '@lucide/vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { localeIndex } = useData()

const copy = computed(() => {
  switch (localeIndex.value) {
    case 'uk':
      return {
        eyebrow: 'АГМАТІЯ АЛЬЯНС',
        heading: 'Хороші системи починаються з розмови.',
        message: 'Є питання, ідея чи бажання щось створити разом? Напишіть нам.',
        contact: 'Написати нам',
        explore: 'Дослідити',
        about: 'Про нас',
        projects: 'Проєкти',
        contactPage: 'Контакти',
        socials: 'Ми в мережі',
        motto: 'Прагматизм у дії.'
      }
    case 'de':
      return {
        eyebrow: 'AGMATIA ALLIANCE',
        heading: 'Gute Systeme beginnen mit guten Gesprächen.',
        message: 'Eine Frage, eine Idee oder Lust auf ein gemeinsames Projekt? Schreib uns.',
        contact: 'Kontakt aufnehmen',
        explore: 'Entdecken',
        about: 'Über uns',
        projects: 'Projekte',
        contactPage: 'Kontakt',
        socials: 'Wir sind online',
        motto: 'Pragmatismus in der Praxis.'
      }
    case 'fr':
      return {
        eyebrow: 'AGMATIA ALLIANCE',
        heading: 'Les bons systèmes commencent par de bonnes conversations.',
        message: 'Une question, une idée ou envie de construire quelque chose ensemble ? Écrivez-nous.',
        contact: 'Écrivez-nous',
        explore: 'Découvrir',
        about: 'À propos',
        projects: 'Projets',
        contactPage: 'Contact',
        socials: 'Retrouvez-nous en ligne',
        motto: 'Le pragmatisme en pratique.'
      }
    case 'es':
      return {
        eyebrow: 'AGMATIA ALLIANCE',
        heading: 'Los buenos sistemas empiezan con buenas conversaciones.',
        message: '¿Tienes una pregunta, una idea o ganas de crear algo en equipo? Escríbenos.',
        contact: 'Escríbenos',
        explore: 'Explorar',
        about: 'Quiénes somos',
        projects: 'Proyectos',
        contactPage: 'Contacto',
        socials: 'Encuéntranos en línea',
        motto: 'Pragmatismo en la práctica.'
      }
    default:
      return {
        eyebrow: 'AGMATIA ALLIANCE',
        heading: 'Good systems start with good conversations.',
        message: 'Have a question, a useful idea, or want to build something together? Drop us a line.',
        contact: 'Say hello',
        explore: 'Explore',
        about: 'About',
        projects: 'Projects',
        contactPage: 'Contact',
        socials: 'Find us online',
        motto: 'Pragmatism in practice.'
      }
  }
})

const localeRoot = computed(() =>
  localeIndex.value === 'root' ? '' : `/${localeIndex.value}`
)
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-invitation">
        <p class="footer-eyebrow">{{ copy.eyebrow }}</p>
        <h2>{{ copy.heading }}</h2>
        <p class="footer-message">{{ copy.message }}</p>
        <a class="footer-contact" :href="`${localeRoot}/contact`">
          {{ copy.contact }}
          <ArrowUpRight :size="17" aria-hidden="true" />
        </a>
      </div>

      <div class="footer-explore">
        <h3>{{ copy.explore }}</h3>
        <a :href="`${localeRoot}/about`">{{ copy.about }}</a>
        <a :href="`${localeRoot}/projects`">{{ copy.projects }}</a>
        <a :href="`${localeRoot}/contact`">{{ copy.contactPage }}</a>
      </div>

      <div class="footer-social">
        <h3>{{ copy.socials }}</h3>
        <a href="mailto:contact@agmatia.org">
          <Mail :size="17" aria-hidden="true" />
          <span>contact@agmatia.org</span>
        </a>
        <a href="https://github.com/agmatia" target="_blank" rel="noopener noreferrer">
          <CodeXml :size="17" aria-hidden="true" />
          <span>GitHub</span>
          <ArrowUpRight :size="14" aria-hidden="true" />
        </a>
        <a
          href="https://bsky.app/profile/agmatia.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle :size="17" aria-hidden="true" />
          <span>Bluesky</span>
          <ArrowUpRight :size="14" aria-hidden="true" />
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2026 Agmatia Alliance</span>
      <span>{{ copy.motto }}</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--vt-c-divider-light);
  padding: 48px max(24px, calc((100% - 1040px) / 2)) 20px;
  color: var(--vt-c-text-1);
}

.footer-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  gap: 48px;
  padding-bottom: 36px;
}

.footer-invitation {
  max-width: 440px;
}

.footer-eyebrow {
  margin: 0 0 10px;
  color: var(--agmatia-calm-cyan);
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
}

.footer-invitation h2 {
  margin: 0 0 12px;
  font-size: 22px;
  line-height: 1.3;
}

.footer-message {
  margin: 0 0 18px;
  max-width: 420px;
  color: var(--vt-c-text-2);
}

.footer-contact,
.footer-explore a,
.footer-social a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.footer-contact {
  color: var(--agmatia-calm-cyan);
  font-weight: 600;
}

.footer-explore,
.footer-social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.footer-explore h3,
.footer-social h3 {
  margin: 0 0 4px;
  font-size: 14px;
}

.footer-explore a,
.footer-social a {
  color: var(--vt-c-text-2);
  font-size: 14px;
}

.footer-explore a:hover,
.footer-social a:hover {
  color: var(--vt-c-text-1);
}

.footer-social a svg {
  flex: none;
  color: var(--agmatia-calm-cyan);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid var(--vt-c-divider-light);
  padding-top: 16px;
  color: var(--vt-c-text-3);
  font-size: 12px;
}

@media (max-width: 640px) {
  .site-footer {
    padding: 36px 24px 18px;
  }

  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
  }

  .footer-invitation {
    grid-column: 1 / -1;
  }
}

@media (max-width: 400px) {
  .footer-main {
    grid-template-columns: 1fr;
  }

  .footer-invitation {
    grid-column: auto;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
