import { ComponentProps } from 'react';
import { variants, type CalloutVariants } from './callout-variants';
import { Icon } from '../icon/icon';

// All the default callout props and all the props from my design system
// Using CVA to generate our types based on the variants defined
export type CalloutProps = ComponentProps<'article'> &
  CalloutVariants & {
    title: string;
    bodyText: string;
  };

export const Callout = ({ variant = 'primary', className, ...props }: CalloutProps) => {
  return (
    <article className={`${variants({ variant })} ${className}`} {...props}>
      <p className="flex gap-2 font-bold" role="heading">
        <span aria-hidden="true">
          <Icon type={variant === 'danger' ? 'warning' : variant || 'information'} />
        </span>
        {props.title}
      </p>
      <p>{props.bodyText}</p>
    </article>
  );
};
