import type { Meta, StoryObj } from '@storybook/react';

import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    variant: 'primary',
    title: 'Callout Title',
    bodyText: 'This is an example of a callout component.',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'success', 'danger', 'information', 'warning'],
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
export const Success: Story = {
  args: {
    variant: 'success',
  },
};
export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};
export const Information: Story = {
  args: {
    variant: 'information',
  },
};
export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};
export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
