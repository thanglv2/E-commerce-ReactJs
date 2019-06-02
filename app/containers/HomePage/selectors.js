/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { selectLoading, stateOfAction } from 'utils/loadingUtil';
import { initialState } from './reducer';
import { LOAD_ITEMS } from './constants';

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

const makeLoadingItems = () =>
  createSelector(
    selectLoading,
    loadingState => loadingState[stateOfAction(LOAD_ITEMS)],
  );

export { selectHome, makeSelectItemName, makeSelectItems, makeLoadingItems };
