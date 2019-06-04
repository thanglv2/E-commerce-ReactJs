import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the horizontalMenu state domain
 */

const selectHorizontalMenuDomain = state => state.horizontalMenu || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HorizontalMenu
 */

const makeSelectHorizontalMenu = () => createSelector(
  selectHorizontalMenuDomain,
  substate => substate,
);

export default makeSelectHorizontalMenu;
export { selectHorizontalMenuDomain };
