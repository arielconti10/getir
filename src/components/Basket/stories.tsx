import { Story, Meta } from '@storybook/react'

import Basket, { BasketProps } from '.'

export default {
  title: 'Basket',
  component: Basket,
  args: {
    value: 39.97
  }
} as Meta

export const Default: Story<BasketProps> = (args) => <Basket {...args} />
