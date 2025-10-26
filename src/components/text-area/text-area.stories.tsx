import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { TextArea } from './text-area';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    label: 'Text Area Label',
    placeholder: 'Enter some text here…',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the text area',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the text area',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the text area',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the text area as required',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');

    expect(textArea).toBeDisabled();
    await userEvent.type(textArea, 'Hello, world!');
    expect(textArea).toHaveValue('');
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithCount: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const inputValue = 'Hello, world!';
    const count = canvas.getByTestId('length');

    await userEvent.type(textArea, 'Hello, world!');

    expect(count).toHaveTextContent(inputValue.length.toString());
  },
};

export const LengthTooLong: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const count = canvas.getByTestId('length');
    const inputValue = 'Y' + 'a' + 's'.repeat(140);

    await userEvent.type(textArea, inputValue);
    expect(count).toHaveTextContent(inputValue.length.toString());
    expect(textArea).toHaveAttribute('aria-invalid', 'true');
    expect(textArea).toHaveClass('ring-danger-500');
    expect(count).toHaveClass('text-danger-500');
  },
};
