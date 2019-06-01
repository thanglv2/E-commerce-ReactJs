import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productDetail state domain
 */

const selectProductDetailDomain = state => state.productDetail || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductDetail
 */

const makeSelectProductDetail = () =>
  createSelector(
    selectProductDetailDomain,
    substate => substate,
  );

export default makeSelectProductDetail;
export { selectProductDetailDomain };
