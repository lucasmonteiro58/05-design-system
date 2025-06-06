import { Button, ButtonProps} from '@lumr-ui/react';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
  },
};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
};

