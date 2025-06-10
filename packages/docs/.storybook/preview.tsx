import type { Preview } from '@storybook/react-vite'
import { themes } from '@storybook/theming';


const GlobalStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

      body {
        font-family: 'Roboto', sans-serif;
        background-color: #1b1c1d;
      }
    `}
  </style>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: {
        ...themes.dark
      }
    }
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
};

export default preview;