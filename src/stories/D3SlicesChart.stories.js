import D3SlicesChart from '@/components/Charts/Sliceschart/d3.sliceschart.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/D3SlicesChart',
  component: D3SlicesChart,
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
    config: {
      key: 'name',
      value: 'value',
      color: { key: 'color', default: '#CCC' },
      radius: { outter: 104, inner: 63, padding: 0.05, round: 0 },
      transition: { duration: 200 },
    },
    datum: [
      { name: 'ODS 1', color: '#eb1c2d', value: 0 },
      { name: 'ODS 2', color: '#d3a029', value: 0 },
      { name: 'ODS 3', color: '#4c9f38', value: 0 },
      { name: 'ODS 4', color: '#c52333', value: 0 },
      { name: 'ODS 5', color: '#ed4135', value: 2 },
      { name: 'ODS 6', color: '#00aed9', value: 0 },
      { name: 'ODS 7', color: '#fdb713', value: 0 },
      { name: 'ODS 8', color: '#8f1838', value: 0 },
      { name: 'ODS 9', color: '#f06a38', value: 0 },
      { name: 'ODS 10', color: '#dd1367', value: 0 },
      { name: 'ODS 11', color: '#f69c39', value: 0 },
      { name: 'ODS 12', color: '#cf8d2a', value: 0 },
      { name: 'ODS 13', color: '#48773e', value: 0 },
      { name: 'ODS 14', color: '#007dbc', value: 0 },
      { name: 'ODS 15', color: '#5cb84d', value: 0 },
      { name: 'ODS 16', color: '#02558b', value: 2 },
      { name: 'ODS 17', color: '#183668', value: 0 },
    ],
    title: 'SlicesChart',
    height: 600,
    download: 'Download',
  },
};
