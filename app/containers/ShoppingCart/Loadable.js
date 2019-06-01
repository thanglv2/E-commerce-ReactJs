/**
 *
 * Asynchronously loads the component for ShoppingCart
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
