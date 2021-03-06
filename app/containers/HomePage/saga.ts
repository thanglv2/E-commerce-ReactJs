/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import delay from '@redux-saga/delay-p'
// import { LOAD_REPOS } from 'containers/App/constants';

import request from 'utils/request';
import { makeSelectItemName } from 'containers/HomePage/selectors';
import { itemsLoaded, itemsLoadingError, homeBannersLoaded, homeBannersLoadingError, getProductsError, getProductsSuccess } from './actions';
import { LOAD_ITEMS, LOAD_HOME_BANNERS, GET_PRODUCTS } from './constants';

/**
 * Github repos request/response handler
 */

// json-server --watch --host 192.168.1.215 db.json --routes ./routes.json --port 4000

export function* getItems() {
  // Select username from store
  const itemName: string = yield select(makeSelectItemName());
  const requestURL = `${(<any>window).API_URL}${itemName}`; // https://github.com/typicode/json-server
  try {
    // Call our request helper (see 'utils/request')
    const items = yield call(request, requestURL);
    yield put(itemsLoaded(items));
  } catch (err) {
    yield put(itemsLoadingError(err));
  }
}
export function* getProducts() {
  const BASE_REQUEST_URL = `${(<any>window).API_URL}`
  const reqUrl = `${BASE_REQUEST_URL}products`
  try {
    const products = yield call(request, reqUrl);
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsError(error))
  }
}

export function* getHomeBanners() {
  try {
    const requestURL = `${(<any>window).API_URL}home_banners`;
    const items = yield call(request, requestURL);
    yield put(homeBannersLoaded(items));
  } catch (err) {
    yield put(homeBannersLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(LOAD_ITEMS, getItems);
  yield takeEvery(GET_PRODUCTS, getProducts)
  yield takeLatest(LOAD_HOME_BANNERS, getHomeBanners);
}
