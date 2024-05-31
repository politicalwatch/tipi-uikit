import PartyLogoIcon from '@/components/PartyLogo/PartyLogoIcon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/PartyLogoIcon',
  component: PartyLogoIcon,
  tags: ['autodocs'],

  argTypes: {
    party: {
      type: 'text',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    party: 'PSOE',
  },
};
