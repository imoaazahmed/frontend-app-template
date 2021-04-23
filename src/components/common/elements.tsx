/*
 * ----------------------
 * DON'T MAKE ANY CHANGES
 * ----------------------
 */

import React, { HTMLProps, forwardRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

/*
 * Container
 */
export type ContainerProps = HTMLProps<HTMLDivElement> & {};

export function Container(props: ContainerProps) {
  const { children, className = '', ...rest } = props;
  return (
    <div className={`container mx-auto ${className}`} {...rest}>
      {children}
    </div>
  );
}

/*
 * Main
 */
export type MainProps = HTMLProps<HTMLDivElement> & {};

export function Main(props: MainProps) {
  const { children, ...rest } = props;
  return <main {...rest}>{children}</main>;
}

/*
 * Box
 */
export type BoxProps = HTMLProps<HTMLDivElement> & {};

export function Box(props: BoxProps) {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
}

/*
 * Stack
 */
export type StackProps = HTMLProps<HTMLDivElement> & {
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
  inline?: boolean;
};

export function Stack(props: StackProps) {
  const { gap = 'md', inline, children, className = '', ...rest } = props;

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
        return 'gap-4';
    }
  };

  return (
    <div className={`grid grid-cols-1 ${gridGap()} ${className}`} {...rest}>
      {children}
    </div>
  );
}

/*
 * Text
 */
export type TextProps = HTMLProps<HTMLParagraphElement> & {};

export function Text(props: TextProps) {
  const { children, ...rest } = props;
  return <p {...rest}>{children}</p>;
}

/*
 * Heading
 */
type HeadingProps = HTMLProps<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Heading(props: HeadingProps) {
  const { as: As = 'h1', children, className = '', ...rest } = props;

  const fontSize = () => {
    switch (As) {
      case 'h1':
        return 'text-3xl';
      case 'h2':
        return 'text-2xl';
      case 'h3':
        return 'text-xl';
      case 'h4':
        return 'text-lg';
      case 'h5':
        return 'text-base';
      case 'h6':
        return 'text-sm';
      default:
        return 'text-3xl';
    }
  };

  return (
    <As className={`${fontSize()} font-bold ${className}`} {...rest}>
      {children}
    </As>
  );
}

/*
 * Table
 */
export type TableProps = HTMLProps<HTMLTableElement> & {};
export type TableSectionProps = HTMLProps<HTMLTableSectionElement> & {};
export type TableRowProps = HTMLProps<HTMLTableRowElement> & {};
export type TableCellProps = HTMLProps<HTMLTableCellElement> & {};

export function Table(props: HTMLProps<HTMLTableElement>) {
  const { children, ...rest } = props;
  return <table {...rest}>{children}</table>;
}

Table.Head = (props: TableSectionProps) => {
  const { children, ...rest } = props;
  return <thead {...rest}>{children}</thead>;
};

Table.Body = (props: TableSectionProps) => {
  const { children, ...rest } = props;
  return <tbody {...rest}>{children}</tbody>;
};

Table.Foot = (props: TableSectionProps) => {
  const { children, ...rest } = props;
  return <tfoot {...rest}>{children}</tfoot>;
};

Table.Row = (props: TableRowProps) => {
  const { children, ...rest } = props;
  return <tr {...rest}>{children}</tr>;
};

Table.Header = (props: TableCellProps) => {
  const { children, ...rest } = props;
  return <th {...rest}>{children}</th>;
};

Table.Data = (props: TableCellProps) => {
  const { children, ...rest } = props;
  return <td {...rest}>{children}</td>;
};

/*
 * Link
 */
export type LinkProps = NextLinkProps & HTMLProps<HTMLAnchorElement>;

export function Link(props: LinkProps) {
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
 * Image
 */
export type ImageProps = NextImageProps & {};

export function Image(props: ImageProps) {
  const { src = 'ss', ...rest } = props;
  return <NextImage src={src} {...rest} />;
}

/*
 * Icon
 */

/*
 * -------------------------------------------------------
 *
 * ++++++++++++++++++++++++ Form +++++++++++++++++++++++++
 * Docs: https://github.com/tailwindlabs/tailwindcss-forms
 *
 * -------------------------------------------------------
 */

/*
 * Input
 */
export type InputProps = HTMLProps<HTMLInputElement> & {
  name: string;
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type = 'text', name, className = '', label, ...rest } = props;

  return (
    <label className='block'>
      {label && <span className='text-gray-700'>{label}</span>}
      <input
        type={type}
        ref={ref}
        id={name}
        name={name}
        className={`form-input mt-1 block w-full ${className}`}
        {...rest}
      />
    </label>
  );
});

/*
 * Select
 */
type OptionProps = HTMLProps<HTMLOptionElement> & {
  name: string;
  value: string;
};

export type SelectProps = HTMLProps<HTMLSelectElement> & {
  options: OptionProps[];
};

export function Select(props: SelectProps) {
  const { type = 'text', options, className = '', ...rest } = props;
  return (
    <select className={`form-select ${className}`} {...rest}>
      {options.map((item) => (
        <option key={item.name} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

/*
 * Radio
 */
export type RadioProps = HTMLProps<HTMLInputElement> & {
  children: string;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { className = '', name, value, children, ...rest } = props;

  return (
    <div>
      <label className='inline-flex items-center'>
        <input
          className={`form-radio ${className}`}
          type='radio'
          name={name}
          value={value}
          ref={ref}
          {...rest}
        />
        <span className='ml-2'>{children}</span>
      </label>
    </div>
  );
});

/*
 * Radio Group
 */
export type RadioGroupProps = {
  label?: string;
  children?: React.ReactNode;
};

export function RadioGroup(props: RadioGroupProps) {
  const { label, children } = props;
  return (
    <div className='block'>
      {label && <span className='text-gray-700'>{label}</span>}
      {children && <div className='mt-2'>{children}</div>}
    </div>
  );
}

/*
 * Checkbox
 */

/*
 * Checkbox Group
 */

/*
 * Textarea
 */

/*
 * Button
 */
export type ButtonProps = {
  children?: React.ReactNode;
  variant: 'primary' | 'secondary';
};

export function Button(props: ButtonProps) {
  const { children, variant, ...rest } = props;
  return (
    <button className={variant} {...rest}>
      {children}
    </button>
  );
}
