import { Ability, MongoQuery, SubjectRawRule } from '@casl/ability';
import { Actions, Subjects, RawRule } from './types';

// New ability
export const ability = new Ability<[Actions, Subjects]>([]);

// Update ability
export const updateAbility = (newRules: SubjectRawRule<Actions, Subjects, MongoQuery<RawRule>>[]) => {
  ability.update([...newRules]);
};
