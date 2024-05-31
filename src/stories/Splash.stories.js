import TipiSplash from '@/components/Splash/Splash.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiSplash',
  component: TipiSplash,
  tags: ['autodocs'],

  argTypes: {
    closeClass: {
      type: 'text',
    },
    closeText: {
      type: 'text',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    closeClass: 'c-button c-button--primary',
    closeText: 'Comenzar',
  },
};
