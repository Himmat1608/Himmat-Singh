import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-mono font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 select-none rounded-md';
    
    const variants = {
      primary: 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-semibold shadow-sm hover:shadow-emerald-500/20',
      secondary: 'bg-zinc-900 text-zinc-100 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850',
      outline: 'border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500',
      ghost: 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900',
      terminal: 'bg-zinc-900/90 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs gap-1.5',
      md: 'h-10 px-4 text-sm gap-2',
      lg: 'h-12 px-6 text-base gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
