import { Ability } from '@casl/ability';

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';

export type Subjects = 'User';

export type AppAbility = Ability<[Actions, Subjects]>;

export type RawRule = {
  action: string | string[];
  subject?: string | string[];
  fields?: string[];
  conditions?: any;
  inverted?: boolean;
  reason?: string;
};
