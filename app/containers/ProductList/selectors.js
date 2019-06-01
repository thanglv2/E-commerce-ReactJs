import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productList state domain
 */

const selectProductListDomain = state => state.productList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductList
 */

const makeSelectProductList = () =>
  createSelector(
    selectProductListDomain,
    substate => substate,
  );

export default makeSelectProductList;
export { selectProductListDomain };
