import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the verticalMenu state domain
 */

const selectVerticalMenuDomain = state => state.verticalMenu || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by VerticalMenu
 */

const makeSelectVerticalMenu = () => createSelector(
  selectVerticalMenuDomain,
  substate => substate,
);

export default makeSelectVerticalMenu;
export { selectVerticalMenuDomain };
