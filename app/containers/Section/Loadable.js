/**
 *
 * Asynchronously loads the component for Section
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
