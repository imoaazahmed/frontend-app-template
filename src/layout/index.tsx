/**
 * @name Layout
 * @author Moaaz Ahmed
 * @summary This file will be containing all the major layout components for handling the layout sections and types.
 * @description As you can see in the file we are using custom javascript logic for handling sections and types.
 * @access private
 *
 * @function Section This is main component to be re-used outside the file to call.
 * @function Layout This is main component to be re-used outside the file to call.
 * @readonly Please don't make any changes to this file.
 */

import React, { ReactNode } from 'react';
import _isArray from 'lodash/isArray';
import _isPlainObject from 'lodash/isPlainObject';
import { SiderHeaderContent } from '@layout/sider-header-content';
import { OnePageContent } from '@layout/one-page-content';

// Section
interface SectionProps {
  name: string;
  sections?: any;
  children?: ReactNode;
}

export function Section(props: SectionProps): JSX.Element {
  const { name, sections, children } = props;
  let section = null;

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
        `[${elementType}] is not a Section component type. you can use <Section name=""></Section> instead.`
      );
    }

    return <>{section?.props?.children}</>;
  }

  return <>{children}</>;
}

Section.displayName = 'Section';

// Layout
interface LayoutProps {
  type?: 'sider_header_content' | 'one-page-content' | 'pre-login-layout';
  children?: ReactNode;
}

export function Layout(props: LayoutProps): JSX.Element {
  const { type, children } = props;

  switch (type) {
    case 'sider_header_content':
      return <SiderHeaderContent sections={children} />;

    case 'one-page-content':
      return <OnePageContent sections={children} />;

    default:
      return <OnePageContent sections={children} />;
  }
}

Layout.displayName = 'Layout';
