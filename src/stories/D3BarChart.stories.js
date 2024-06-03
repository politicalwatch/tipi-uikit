import D3BarChart from '@/components/Charts/Barchart/d3.barchart.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/D3BarChart',
  component: D3BarChart,
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
    config: {},
    datum: [],
    title: 'Barchart',
    height: 600,
    download: 'Download',
  },
};
