import TipiHeader from '@/components/Header/Header.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiHeader',
  component: TipiHeader,
  tags: ['autodocs'],

  argTypes: {
    title: {
      type: 'text',
    },
    subtitle: {
      type: 'text',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    title: 'Buscar',
    subtitle:
      'Bucea en la actividad parlamentaria relacionada con los ODS con las múltiples opciones que te ofrece el buscador de Parlamento 2030',
  },
};
