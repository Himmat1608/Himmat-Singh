import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'emerald' | 'subtle';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-mono font-medium transition-colors border';

  const variants = {
    default: 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700',
    outline: 'border-zinc-700 text-zinc-300 bg-transparent',
    emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:border-emerald-500/60',
    subtle: 'border-zinc-800/60 bg-zinc-900/50 text-zinc-400',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
