import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the horizontalMenuItem state domain
 */

const selectHorizontalMenuItemDomain = state => state.horizontalMenuItem || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HorizontalMenuItem
 */

const makeSelectHorizontalMenuItem = () => createSelector(
  selectHorizontalMenuItemDomain,
  substate => substate,
);

export default makeSelectHorizontalMenuItem;
export { selectHorizontalMenuItemDomain };
