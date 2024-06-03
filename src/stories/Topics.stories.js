import { vueRouter } from 'storybook-vue3-router';
import TipiTopics from '@/components/Topics/Topics.vue';
import { topicsStyles } from './mocks';

const customRoutes = [
  {
    path: '/',
    name: 'home',
    component: TipiTopics,
  },
  {
    path: '/results',
    name: 'results',
    component: TipiTopics,
  },
  {
    path: '/initiative/:id',
    name: 'initiative',
    params: { id: '161-000792' },
    component: TipiTopics,
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiTopics',
  component: TipiTopics,
  decorators: [vueRouter(customRoutes)],
  tags: ['autodocs'],

  argTypes: {
    meta: {
      type: 'text',
    },
    topics: {
      type: 'array',
    },
    tags: {
      type: 'array',
    },
    topicsStyles: {
      type: 'object',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    meta: 'ODS tratados',
    topics: ['ODS 16 Paz, justicia e instituciones sólidas', 'ODS 5 Igualdad de género'],
    tags: [
      {
        topic: 'ODS 16 Paz, justicia e instituciones sólidas',
        subtopic: '16.1 Redución de la violencia',
        tag: 'Violencia de género',
        times: 1,
      },
      {
        topic: 'ODS 16 Paz, justicia e instituciones sólidas',
        subtopic: '16.a Fortalecimiento de las instituciones de seguridad',
        tag: 'Prevención de la violencia y la delincuencia',
        times: 1,
      },
      {
        topic: 'ODS 5 Igualdad de género',
        subtopic: '5.2 Acabar con la violencia contra las mujeres',
        tag: 'Ley 1/2004',
        times: 1,
      },
      {
        topic: 'ODS 5 Igualdad de género',
        subtopic: '5.2 Acabar con la violencia contra las mujeres',
        tag: 'Violencia de género',
        times: 1,
      },
    ],
    topicsStyles,
  },
};
