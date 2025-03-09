import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      variant: {
        primary:
          'bg-[#0E78DF] text-white hover:bg-[#0E78DF]/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90',
        outline:
          'border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
        secondary:
          'bg-[#8E959D] text-white hover:bg-[#8E959D]/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90',
        ghost:
          'bg-[#E2E9F2] hover:bg-[#E2E9F2]/90 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-50/90',
        danger:
          'bg-[#B00020] text-white hover:bg-[#B00020]/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90',
        pageActive:
          'bg-[#F1F9FF] text-[#1D2022] hover:bg-[#F1F9FF]/90 w-8 h-8 rounded-full p-5 gap-2.5 font-normal text-base leading-[22px] tracking-[-0.6px] text-center font-spoqa',
        pageDefault:
          'bg-white text-[#8E959D] dark:border-neutral-800 dark:bg-neutral-950 w-8 h-8 rounded-full p-5 gap-2.5 font-normal text-base leading-[22px] tracking-[-0.6px] text-center font-spoqa',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-7 rounded-sm px-2 py-1',
        lg: 'h-11 rounded-lg px-8 py-3',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
