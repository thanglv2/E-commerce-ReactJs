/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectItemName = () =>
  createSelector(
    selectHome,
    homeState => homeState.itemName,
  );

const makeSelectItems = () =>
  createSelector(
    selectHome,
    homeState => homeState.items,
  );

export { selectHome, makeSelectItemName, makeSelectItems };
