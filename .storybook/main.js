const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../src/components/Introduction.stories.mdx', // default page
    '../src',
  ],
  addons: ['@storybook/addon-essentials', 'storybook-addon-designs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // https://github.com/storybookjs/storybook/issues/22223
      build: {
        target: 'esnext',
      },
    });
  },
};
