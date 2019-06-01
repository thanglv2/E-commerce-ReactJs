/**
 *
 * Asynchronously loads the component for ProductDetail
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
