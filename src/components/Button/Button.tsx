// Button.tsx
'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'gold' 
  | 'blue' 
  | 'green' 
  | 'yellow' 
  | 'white'
  | 'outline';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  fullWidth?: boolean;
  as?: 'button' | 'link';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  fullWidth = false,
  as,
  ...props
}: ButtonProps) {
  const baseClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`;

  // Automatically use link if href is provided, unless explicitly set to button
  const shouldRenderAsLink = href && as !== 'button';

  if (shouldRenderAsLink) {
    // Extract onClick and other event handlers that should be on the Link
    const { onClick, ...linkProps } = props;
    return (
      <Link href={href} className={baseClasses} onClick={onClick} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
