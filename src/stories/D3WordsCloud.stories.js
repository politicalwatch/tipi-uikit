import D3WordsCloud from '@/components/Charts/WordsCloud/d3.wordscloud.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/D3WordsCloud',
  component: D3WordsCloud,
  tags: ['autodocs'],

  argTypes: {
    config: {
      type: 'object',
    },
    datum: {
      type: 'array',
    },
    title: {
      type: 'text',
    },
    source: {
      type: 'text',
    },
    height: {
      type: 'number',
    },
    download: {
      type: 'text',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    datum: [
      { tag: 'Atención a personas dependientes', size: 25, value: 1, color: '#dd1367' },
      { tag: 'Atención a la dependencia', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
      { tag: 'Financiación de la sanidad', size: 25, value: 1, color: '#4c9f38' },
    ],
    config: {
      key: 'tag',
      size: 'size',
      value: 'value',
      angle: [0],
      color: { key: 'color' },
      fontFamily: 'Rubik',
      tooltip: { suffix: 'aparición', suffixPlural: 'apariciones' },
    },
    height: 400,
  },
};
