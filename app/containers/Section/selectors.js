import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the section state domain
 */

const selectSectionDomain = state => state.section || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Section
 */

const makeSelectSection = () => createSelector(
  selectSectionDomain,
  substate => substate,
);

export default makeSelectSection;
export { selectSectionDomain };
