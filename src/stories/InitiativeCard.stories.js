import { vueRouter } from 'storybook-vue3-router';
import TipiInitiativeCard from '@/components/InitiativeCard/InitiativeCard.vue';
import { initiative, topicsStyles } from './mocks';

const customRoutes = [
  {
    path: '/',
    name: 'home',
    component: TipiInitiativeCard,
  },
  {
    path: '/initiative/:id',
    name: 'initiative',
    params: { id: '161-000792' },
    component: TipiInitiativeCard,
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiInitiativeCard',
  component: TipiInitiativeCard,
  decorators: [vueRouter(customRoutes)],
  tags: ['autodocs'],

  argTypes: {
    initiative: {
      type: 'object',
    },
    topicsStyles: {
      type: 'object',
    },
    extendedLayout: {
      type: 'boolean',
    },
    metaDeputies: {
      type: 'string',
    },
    metaGroupOthers: {
      type: 'string',
    },
    metaColors: {
      type: 'object',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    initiative,
    topicsStyles,
    extendedLayout: true,
    metaDeputies: 'Diputada/o',
    metaGroupOthers: 'Autor',
    metaColors: undefined,
  },
};
