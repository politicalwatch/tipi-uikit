import TipiMessage from '@/components/Message/Message.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiMessage',
  component: TipiMessage,
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      TipiMessage,
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: `
    <TipiMessage :type="type" :icon="icon">
      <template #default>
        <p>This is the default slot content</p>
      </template>
    </TipiMessage>
  `,
  }),

  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['success', 'error', 'info'],
    },
    icon: {
      control: 'boolean',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    type: 'success',
    icon: true,
  },
};
