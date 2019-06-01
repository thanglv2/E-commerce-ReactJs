import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the shoppingCart state domain
 */

const selectShoppingCartDomain = state => state.shoppingCart || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ShoppingCart
 */

const makeSelectShoppingCart = () =>
  createSelector(
    selectShoppingCartDomain,
    substate => substate,
  );

export default makeSelectShoppingCart;
export { selectShoppingCartDomain };
