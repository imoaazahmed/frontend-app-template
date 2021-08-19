import { ReactNode } from 'react';

export interface SectionProps {
  name: string;
  sections?: any;
  children?: ReactNode;
}

export interface PageProps {
  layout?: 'one-column' | 'two-columns' | 'three-columns';
  children?: ReactNode;
}

export interface LayoutProps {
  sections: ReactNode;
}
