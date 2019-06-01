/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  productList: {
    id: `${scope}.productList`,
    defaultMessage: 'Product List',
  },
  productDetail: {
    id: `${scope}.productDetail`,
    defaultMessage: 'Product Detail',
  },
  shoppingCart: {
    id: `${scope}.shoppingCart`,
    defaultMessage: 'Shopping Cart',
  },
});
