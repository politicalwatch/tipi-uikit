import TipiIcon from '@/components/Icon/Icon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiIcon',
  component: TipiIcon,
  tags: ['autodocs'],

  argTypes: {
    icon: {
      type: 'text',
    },
    icon: {
      type: 'text',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    icon: 'icon_close',
    color: '#dbdbdb',
  },
};
