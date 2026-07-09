// Button.tsx
'use client';

import { ButtonHTMLAttributes, ReactNode, MouseEventHandler, AnchorHTMLAttributes } from 'react';
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

type CommonButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
};

type ButtonAsButtonProps = CommonButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  as?: 'button';
  href?: never;
  target?: never;
  rel?: never;
};

type ButtonAsLinkProps = CommonButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
  as: 'link';
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  as = 'button',
  ...props
}: ButtonProps) {
  const baseClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`;

  if (as === 'link') {
    const { href, target, rel, ...rest } = props as ButtonAsLinkProps;
    return (
      <Link 
        href={href} 
        className={baseClasses} 
        target={target}
        rel={rel}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButtonProps;
  return (
    <button className={baseClasses} {...rest}>
      {children}
    </button>
  );
}
