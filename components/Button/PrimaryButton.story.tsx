import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton, TypeButton } from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
  title: 'PrimaryButton',
};
export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {
    buttonTitle: 'Button',
    buttonType: TypeButton.primary,
  },
};
