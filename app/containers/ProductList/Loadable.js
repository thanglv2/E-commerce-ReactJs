/**
 *
 * Asynchronously loads the component for ProductList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
