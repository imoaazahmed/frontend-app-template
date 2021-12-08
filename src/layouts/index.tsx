/*
 * ----------------------
 * DON'T MAKE ANY CHANGES
 * ----------------------
 */

import React, { ReactNode } from 'react';
import _isArray from 'lodash/isArray';
import _isPlainObject from 'lodash/isPlainObject';
import { HeaderContentFooter } from '@layouts/header-content-footer';
import { HeaderSiderContent } from '@layouts/header-sider-content';

// Section
interface SectionProps {
  name: string;
  sections?: any;
  children?: ReactNode;
}

export function Section(props: SectionProps): JSX.Element {
  const { name, sections, children } = props;
  let section;

  // Check if object
  if (_isPlainObject(sections)) {
    if (sections?.props?.name === name) section = { ...sections };
  }

  // Check if array
  if (_isArray(sections)) {
    section = sections?.find((section: any) => section?.props?.name === name);
  }

  // Check if a Section component
  if (section) {
    const elementType = typeof section?.type === 'string' ? section?.type : section?.type?.displayName;

    if (elementType !== 'Section') {
      throw new Error(
        `[${elementType}] is not a Section component type. you can use <Section name=''></Section> instead.`
      );
    }

    return <>{section?.props?.children}</>;
  }

  return <>{children}</>;
}

Section.displayName = 'Section';

// Layout
interface LayoutProps {
  type?: 'header_content_footer' | 'header_sider_content';
  children?: ReactNode;
}

export function Layout(props: LayoutProps): JSX.Element {
  const { type, children } = props;

  switch (type) {
    case 'header_sider_content':
      return <HeaderSiderContent sections={children} />;

    case 'header_content_footer':
    default:
      return <HeaderContentFooter sections={children} />;
  }
}

Layout.displayName = 'Layout';
