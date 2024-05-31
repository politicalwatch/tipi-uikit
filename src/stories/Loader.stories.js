import TipiLoader from '@/components/Loader/Loader.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiLoader',
  component: TipiLoader,
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
    title: 'Cargando datos',
    subtitle: 'Puede llevar unos segundos',
  },
};
