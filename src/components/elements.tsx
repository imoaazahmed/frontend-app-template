/*
 * ----------------------
 * DON'T MAKE ANY CHANGES
 * ----------------------
 */

import React, { HTMLProps } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useRouter } from 'next/router';

/*
 * Container
 */
export type ContainerProps = HTMLProps<HTMLDivElement>;

export function Container(props: ContainerProps): JSX.Element {
  const { children, className = '', ...rest } = props;
  return (
    <div className={`container mx-auto ${className}`} {...rest}>
      {children}
    </div>
  );
}

/*
 * Box
 */
export type BoxProps = HTMLProps<HTMLDivElement>;

export function Box(props: BoxProps): JSX.Element {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
}

/*
 * Stack
 */
export type StackProps = HTMLProps<HTMLDivElement> & {
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
  isInline?: boolean;
};

export function Stack(props: StackProps): JSX.Element {
  const { gap = 'md', isInline, children, className = '', ...rest } = props;

  const gridGap = () => {
    switch (gap) {
      case 'xl':
        return 'gap-8';
      case 'lg':
        return 'gap-7';
      case 'md':
        return 'gap-4';
      case 'sm':
        return 'gap-3';
      case 'xs':
        return 'gap-1';
      default:
        return 'gap-0';
    }
  };

  const handleIsInline = isInline
    ? 'grid-flow-col auto-cols-max'
    : 'grid-cols-1';

  return (
    <div
      className={`grid ${handleIsInline} ${gridGap()} ${className}`}
      {...rest}>
      {children}
    </div>
  );
}

/*
 * Link
 */
export type LinkProps = NextLinkProps & HTMLProps<HTMLAnchorElement>;

export function Link(props: LinkProps): JSX.Element {
  const {
    href,
    passHref,
    as,
    prefetch,
    replace,
    scroll,
    shallow,
    locale,
    children,
    ...rest
  } = props;

  return (
    <NextLink
      href={href}
      passHref={passHref}
      as={as}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
}

/*
 * Active Link
 */
export function ActiveLink(props: LinkProps): JSX.Element {
  const { href, className = '', children, ...rest } = props;
  const { asPath } = useRouter();
  const activeClassName = asPath === props.href ? 'active' : '';

  return (
    <Link href={href} className={`${activeClassName} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/*
 * Image
 */
export type ImageProps = NextImageProps;

export function Image(props: ImageProps): JSX.Element {
  const { src = 'ss', ...rest } = props;
  return <NextImage src={src} {...rest} />;
}

/*
 * Icon
 */
