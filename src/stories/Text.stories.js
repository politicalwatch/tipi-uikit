import TipiText from '@/components/Text/Text.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiText',
  component: TipiText,
  tags: ['autodocs'],

  argTypes: {
    meta: {
      type: 'text',
    },
    value: {
      type: 'array',
    },
    type: {
      type: 'text',
    },
    source: {
      type: 'array',
    },
    hideGroup: {
      type: 'boolean',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    meta: 'Diputadas/os más activas/os',
    value: ['Sayas López, Sergio', 'Hoces Íñiguez, Ignacio', 'Cuesta Rodríguez, María del Socorro'],
    type: 'deputy',
    hideGroup: false,
  },
};
