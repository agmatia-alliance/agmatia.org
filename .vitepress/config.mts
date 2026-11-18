import { defineConfig } from 'vitepress'
import vueThemeConfig from '@vue/theme/config'

const socialLinks = [
  { icon: 'github', link: 'https://github.com/agmatia' },
  { icon: 'bluesky', link: 'https://bsky.app/profile/agmatia.org' }
]

const sharedThemeConfig = {
  logo: '/logos/nexus-symbol-light.svg',
  siteTitle: 'AGMATIA ALLIANCE',
  socialLinks
}

const englishThemeConfig = {
  ...sharedThemeConfig,
  nav: [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Projects', link: '/projects' },
    { text: 'Contact', link: '/contact' },
    {
      text: 'Language',
      items: [
        { text: 'English', link: '/' },
        { text: 'Українська', link: '/uk/' },
        { text: 'Deutsch', link: '/de/' },
        { text: 'Français', link: '/fr/' },
        { text: 'Español', link: '/es/' }
      ]
    }
  ],
  i18n: {
    pageNotFound: 'Oops, this page wandered off.',
    deadLink: {
      before: 'There is nothing at ',
      after: '. Maybe try one of the links above?'
    }
  }
}

const ukrainianThemeConfig = {
  ...sharedThemeConfig,
  nav: [
    { text: 'Головна', link: '/uk/' },
    { text: 'Про нас', link: '/uk/about' },
    { text: 'Проєкти', link: '/uk/projects' },
    { text: 'Контакти', link: '/uk/contact' },
    {
      text: 'Мова',
      items: [
        { text: 'English', link: '/' },
        { text: 'Українська', link: '/uk/' },
        { text: 'Deutsch', link: '/de/' },
        { text: 'Français', link: '/fr/' },
        { text: 'Español', link: '/es/' }
      ]
    }
  ],
  i18n: {
    search: 'Пошук',
    menu: 'Меню',
    toc: 'На цій сторінці',
    returnToTop: 'Нагору',
    appearance: 'Тема',
    previous: 'Попередня',
    next: 'Наступна',
    pageNotFound: 'Ой, здається, ця сторінка загубилася.',
    locales: 'Мови',
    ariaLanguage: 'Вибрати мову',
    ariaDarkMode: 'Змінити тему',
    ariaSkipToContent: 'Перейти до вмісту',
    ariaToC: 'Зміст',
    ariaMainNav: 'Головна навігація',
    ariaMobileNav: 'Мобільна навігація',
    deadLink: {
      before: 'За адресою ',
      after: ' нічого немає. Можливо, варто повернутися на головну?'
    }
  }
}

const germanThemeConfig = {
  ...sharedThemeConfig,
  nav: [
    { text: 'Startseite', link: '/de/' },
    { text: 'Über uns', link: '/de/about' },
    { text: 'Projekte', link: '/de/projects' },
    { text: 'Kontakt', link: '/de/contact' },
    {
      text: 'Sprache',
      items: [
        { text: 'English', link: '/' },
        { text: 'Українська', link: '/uk/' },
        { text: 'Deutsch', link: '/de/' },
        { text: 'Français', link: '/fr/' },
        { text: 'Español', link: '/es/' }
      ]
    }
  ],
  i18n: {
    search: 'Suche',
    menu: 'Menü',
    toc: 'Auf dieser Seite',
    returnToTop: 'Nach oben',
    appearance: 'Darstellung',
    previous: 'Zurück',
    next: 'Weiter',
    pageNotFound: 'Hoppla, diese Seite ist wohl unterwegs verloren gegangen.',
    locales: 'Sprachen',
    ariaLanguage: 'Sprache auswählen',
    ariaDarkMode: 'Darstellung wechseln',
    ariaSkipToContent: 'Zum Inhalt springen',
    ariaToC: 'Inhaltsverzeichnis',
    ariaMainNav: 'Hauptnavigation',
    ariaMobileNav: 'Mobile Navigation',
    deadLink: {
      before: 'Unter dieser Adresse gibt es ',
      after: ' nichts. Vielleicht hilft ein Link aus dem Menü?'
    }
  }
}

const frenchThemeConfig = {
  ...sharedThemeConfig,
  nav: [
    { text: 'Accueil', link: '/fr/' },
    { text: 'À propos', link: '/fr/about' },
    { text: 'Projets', link: '/fr/projects' },
    { text: 'Contact', link: '/fr/contact' },
    {
      text: 'Langue',
      items: [
        { text: 'English', link: '/' },
        { text: 'Українська', link: '/uk/' },
        { text: 'Deutsch', link: '/de/' },
        { text: 'Français', link: '/fr/' },
        { text: 'Español', link: '/es/' }
      ]
    }
  ],
  i18n: {
    search: 'Rechercher',
    menu: 'Menu',
    toc: 'Sur cette page',
    returnToTop: 'Retour en haut',
    appearance: 'Apparence',
    previous: 'Précédent',
    next: 'Suivant',
    pageNotFound: 'Oups, cette page semble s’être égarée.',
    locales: 'Langues',
    ariaLanguage: 'Choisir la langue',
    ariaDarkMode: 'Changer de thème',
    ariaSkipToContent: 'Aller au contenu',
    ariaToC: 'Sommaire',
    ariaMainNav: 'Navigation principale',
    ariaMobileNav: 'Navigation mobile',
    deadLink: {
      before: 'Il n’y a rien à cette adresse : ',
      after: '. Essayez peut-être un lien du menu ?'
    }
  }
}

const spanishThemeConfig = {
  ...sharedThemeConfig,
  nav: [
    { text: 'Inicio', link: '/es/' },
    { text: 'Quiénes somos', link: '/es/about' },
    { text: 'Proyectos', link: '/es/projects' },
    { text: 'Contacto', link: '/es/contact' },
    {
      text: 'Idioma',
      items: [
        { text: 'English', link: '/' },
        { text: 'Українська', link: '/uk/' },
        { text: 'Deutsch', link: '/de/' },
        { text: 'Français', link: '/fr/' },
        { text: 'Español', link: '/es/' }
      ]
    }
  ],
  i18n: {
    search: 'Buscar',
    menu: 'Menú',
    toc: 'En esta página',
    returnToTop: 'Volver arriba',
    appearance: 'Apariencia',
    previous: 'Anterior',
    next: 'Siguiente',
    pageNotFound: 'Vaya, parece que esta página se ha perdido.',
    locales: 'Idiomas',
    ariaLanguage: 'Elegir idioma',
    ariaDarkMode: 'Cambiar tema',
    ariaSkipToContent: 'Ir al contenido',
    ariaToC: 'Índice',
    ariaMainNav: 'Navegación principal',
    ariaMobileNav: 'Navegación móvil',
    deadLink: {
      before: 'No hay nada en ',
      after: '. ¿Quizá te sirva alguno de los enlaces del menú?'
    }
  }
}

export default defineConfig({
  ...vueThemeConfig,
  title: 'Agmatia Alliance',
  description: 'Pragmatism in practice. Independent systems engineering and open collaboration.',
  lang: 'en',
  cleanUrls: true,
  appearance: true,
  sitemap: {
    hostname: 'https://agmatia.org'
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/icons/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;600;700&display=swap'
      }
    ]
  ],

  themeConfig: englishThemeConfig,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: englishThemeConfig
    },
    uk: {
      label: 'Українська',
      lang: 'uk-UA',
      link: '/uk/',
      title: 'Агматія Альянс',
      description: 'Корисне програмне забезпечення та надійні системи без зайвої складності.',
      themeConfig: ukrainianThemeConfig
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      link: '/de/',
      title: 'Agmatia Alliance',
      description: 'Nützliche Software und zuverlässige Systeme ohne unnötige Komplexität.',
      themeConfig: germanThemeConfig
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      title: 'Agmatia Alliance',
      description: 'Des logiciels utiles et des systèmes fiables, sans complexité inutile.',
      themeConfig: frenchThemeConfig
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/',
      title: 'Agmatia Alliance',
      description: 'Software útil y sistemas fiables, sin complicaciones innecesarias.',
      themeConfig: spanishThemeConfig
    }
  }
})