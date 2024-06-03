import TipiTopicPill from '@/components/TopicPill/TopicPill.vue';
import { topicsStyles } from './mocks';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiTopicPill',
  component: TipiTopicPill,
  tags: ['autodocs'],

  argTypes: {
    topics: {
      type: 'array',
    },
    topicsStyles: {
      type: 'object',
    },
    withLinks: {
      type: 'boolean',
    },
    limit: {
      type: 'number',
    },
    order: {
      type: 'boolean',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    topics: [
      'ODS 1 Fin de la pobreza',
      'ODS 16 Paz, justicia e instituciones sólidas',
      'ODS 5 Igualdad de género',
    ],
    topicsStyles,
  },
};

export const Unrelated = {
  args: {
    topics: [],
    topicsStyles,
  },
};
