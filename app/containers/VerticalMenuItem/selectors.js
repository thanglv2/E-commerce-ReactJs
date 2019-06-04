import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the verticalMenuItem state domain
 */

const selectVerticalMenuItemDomain = state => state.verticalMenuItem || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by VerticalMenuItem
 */

const makeSelectVerticalMenuItem = () => createSelector(
  selectVerticalMenuItemDomain,
  substate => substate,
);

export default makeSelectVerticalMenuItem;
export { selectVerticalMenuItemDomain };
