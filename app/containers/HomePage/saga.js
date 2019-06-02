/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';

import request from 'utils/request';
import { makeSelectItemName } from 'containers/HomePage/selectors';
import { itemsLoaded, itemsLoadingError } from './actions';

/**
 * Github repos request/response handler
 */

// json-server --watch db.json --routes ./routes.json --port 4000 --delay 3000

export function* getItems() {
  // Select username from store
  const itemName = yield select(makeSelectItemName());
  const requestURL = `http://localhost:4000/${itemName}`; // https://github.com/typicode/json-server

  try {
    // Call our request helper (see 'utils/request')
    const items = yield call(request, requestURL);
    yield put(itemsLoaded(items));
  } catch (err) {
    yield put(itemsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getItems);
}
