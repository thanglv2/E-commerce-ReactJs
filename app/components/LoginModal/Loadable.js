/**
 *
 * Asynchronously loads the component for FacebookLogin
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
