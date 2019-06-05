/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { selectLoading, stateOfAction } from 'utils/loadingUtil';
import { initialState } from './reducer';
import { LOAD_ITEMS, LOAD_HOME_BANNERS } from './constants';

const selectHome = state => state.home || initialState;

const makeSelectItemName = () => createSelector(
  selectHome,
  homeState => homeState.itemName,
);

const makeSelectItems = () => createSelector(
  selectHome,
  homeState => homeState.items,
);

const makeLoadingItems = () => createSelector(
  selectLoading,
  loadingState => loadingState[stateOfAction(LOAD_ITEMS)],
);
const makeSelectProducts = () => createSelector(
  selectHome,
  homeState => homeState.product
)

const makeLoadingHomeBanners = () => createSelector(
  selectLoading,
  loadingState => loadingState[stateOfAction(LOAD_HOME_BANNERS)],
);

const makeSelectHomeBanners = () => createSelector(
  selectHome,
  homeState => homeState.homeBanners,
);

export {
  selectHome,
  makeSelectItemName,
  makeSelectItems,
  makeLoadingItems,
  makeSelectHomeBanners,
  makeLoadingHomeBanners,
  makeSelectProducts,
};
