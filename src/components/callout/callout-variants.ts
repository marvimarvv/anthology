import { cva, type VariantProps } from 'class-variance-authority';

export type CalloutVariants = VariantProps<typeof variants>;

// This allows use to have types but also access them as a JS array if I want
// to use it somewhere else (e.g. storybook controls)
// BUT BEWARE: When using string interpolation for class names,
// Tailwind might strip out unused styles during build time.
// So if you use this array somewhere else for dynamic class names,
// make sure to safelist the classes in your Tailwind config.
const variations = ['primary', 'success', 'danger', 'information', 'warning'] as const;
type Variations = (typeof variations)[number];

const variant = {
  primary: [
    'bg-primary-200',
    'border-primary-500',
    'text-primary-900',
    'dark:bg-primary-900',
    'dark:border-primary-900',
    'dark:text-primary-50',
  ],
  success: [
    'bg-success-200',
    'border-success-500',
    'text-success-900',
    'dark:bg-success-900',
    'dark:border-success-900',
    'dark:text-success-50',
  ],
  danger: [
    'bg-danger-200',
    'border-danger-500',
    'text-danger-900',
    'dark:bg-danger-900',
    'dark:border-danger-900',
    'dark:text-danger-50',
  ],
  information: [
    'bg-information-200',
    'border-information-500',
    'text-information-900',
    'dark:bg-information-900',
    'dark:border-information-900',
    'dark:text-information-50',
  ],
  warning: [
    'bg-warning-200',
    'border-warning-500',
    'text-warning-900',
    'dark:bg-warning-900',
    'dark:border-warning-900',
    'dark:text-warning-50',
  ],
};

export const variants = cva(
  ['border-2', 'rounded', 'flex', 'gap-4', 'flex-col', 'w-fit', 'p-4', 'w-max-[400px]'],
  {
    variants: {
      variant: variant,
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
