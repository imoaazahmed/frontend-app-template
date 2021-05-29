/*
 * ----------------------
 * DON'T MAKE ANY CHANGES
 * ----------------------
 */

import React, { ReactNode } from 'react';
import { OneColumnLayout } from './one-column-layout';
import _ from 'lodash';

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
  if (_.isPlainObject(sections)) {
    if (sections?.props?.name === name) section = { ...sections };
  }

  // Check if array
  if (_.isArray(sections)) {
    section = sections?.find((section: any) => section?.props?.name === name);
  }

  if (section) {
    // Check if not a Section component
    const elementType =
      typeof section?.type === 'string' ? section?.type : section?.type?.name;

    if (elementType !== 'Section') {
      throw new Error(
        `[${elementType}] is not a Section component type. you can use <Section name=''></Section> instead.`
      );
    }

    return <>{section?.props?.children}</>;
  }
  return <>{children}</>;
}

// Page
interface PageProps {
  layout?: 'one-column' | 'two-columns' | 'three-columns';
  children?: ReactNode;
}

export function Page(props: PageProps): JSX.Element {
  const { layout = 'one-column', children } = props;

  switch (layout) {
    case 'two-columns':
      // TODO: develop two columns layout
      return <>Tow columns layout still under development</>;

    case 'three-columns':
      // TODO: develop three columns layout
      return <>Three columns layout still under development</>;

    case 'one-column':
    default:
      return <OneColumnLayout sections={children} />;
  }
}

export interface LayoutProps {
  sections: ReactNode;
}
