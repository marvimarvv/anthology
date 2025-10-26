import { ComponentProps } from 'react';
import { variants, type ButtonVariants } from './button-variants';

// All the default button props and all the props from my design system
// Using CVA to generate our types based on the variants defined
export type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  return <button className={`${variants({ variant, size })} ${className}`} {...props} />;
};
