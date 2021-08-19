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
  const { src = '', ...rest } = props;
  return <NextImage src={src} {...rest} />;
}

/*
 * Icon
 */
