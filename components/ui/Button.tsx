import Link from 'next/link';
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { ArrowRight } from './Icons';

type Variant = 'primary' | 'glass';
type Size = 'md' | 'sm';

/** `md` is the header pill (logo, language, menu): every button shares its geometry. */
const sizes: Record<Size, string> = {
  md: 'h-[52px] gap-[10px] px-6 text-[15px]',
  sm: 'h-10 gap-2 px-4 text-sm',
};

/** `glass` is the header's translucent pill; `primary` is the solid brand-gradient pill (globals.css). */
const variants: Record<Variant, string> = {
  primary: 'btn-glass btn-primary font-medium',
  glass: 'btn-glass font-medium',
};

export function buttonClass(variant: Variant, size: Size, className = '') {
  return `inline-flex items-center rounded-pill font-sans ${sizes[size]} ${variants[variant]} ${className}`.trim();
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & { href: string };

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  arrow = variant === 'primary',
  className,
  children,
  href,
  ...rest
}: ButtonLinkProps) {
  const cls = buttonClass(variant, size, className);
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={size === 'sm' ? 15 : 18} />}
    </>
  );
  if (href.startsWith('http') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export function Button({
  variant = 'primary',
  size = 'md',
  arrow = variant === 'primary',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${buttonClass(variant, size, className)} cursor-pointer border-0`}
      {...rest}
    >
      {children}
      {arrow && <ArrowRight size={size === 'sm' ? 15 : 18} />}
    </button>
  );
}
