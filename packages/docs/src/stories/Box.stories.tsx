import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@lumr-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <div>Testando o elemento Box</div>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}