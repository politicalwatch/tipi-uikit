import TipiNavbar from '@/components/Navbar/Navbar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiNavbar',
  component: TipiNavbar,
  tags: ['autodocs'],

  argTypes: {
    links: {
      type: 'array',
    },
    disclaimerLink: {
      type: 'object',
    },
    preImage: {
      type: 'string',
    },
    logo: {
      type: 'string',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    links: [
      { route: 'search', name: 'Buscar', condition: true },
      { route: 'ods', name: 'ODS', condition: true },
      { route: 'deputies', name: 'Diputados', condition: true },
      { route: 'dashboard', name: 'Métricas', condition: true },
      { route: 'scanner', name: 'Escáner', condition: true, icon: 'open-blank', external: true },
      { route: 'alerts', name: 'Alertas', condition: false },
      { route: 'about', name: 'Acerca', condition: true },
    ],
    disclaimerLink: {
      route: 'about-en',
      name: '<img src="https://www.parlamento2030.es/img/uk.svg"> Learn more about this project in English',
      external: true,
    },
    preImage: 'https://www.parlamento2030.es/img/multicolor.jpg',
    logo: 'https://www.parlamento2030.es/img/logo.png',
  },
};
