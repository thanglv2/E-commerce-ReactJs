/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_ITEM_NAME,
  ITEMS_LOADED,
  ITEMS_LOADING_ERROR,
  LOAD_ITEMS,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,

  HOME_BANNERS_LOADED,
  HOME_BANNERS_LOADING_ERROR,
  LOAD_HOME_BANNERS
} from './constants';

import { Action } from 'utils/interfaces';
/**
 * Changes the input field of the form
 *
 * @param  {string} itemName The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeItemName(itemName: string): Action {
  return {
    type: CHANGE_ITEM_NAME,
    itemName,
  };
}

export function itemsLoaded(items: any[]): Action {
  return {
    type: ITEMS_LOADED,
    items,
  };
}

export function itemsLoadingError(error: object): Action {
  return {
    type: ITEMS_LOADING_ERROR,
    error,
  };
}

export function loadItems() {
  return {
    type: LOAD_ITEMS
  };
}
export function getProducts(): Action {
  return {
    type: GET_PRODUCTS,
  }
}
export function getProductsSuccess(products: []): Action {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  }
}
export function getProductsError(error: object): Action {
  return {
    type: GET_PRODUCTS_ERROR,
    error
  }
}
export function loadHomeBanners() {
  return {
    type: LOAD_HOME_BANNERS
  };
}

export function homeBannersLoaded(items: any[]): Action {
  return {
    type: HOME_BANNERS_LOADED,
    items,
  };
}

export function homeBannersLoadingError(error: object): Action {
  return {
    type: HOME_BANNERS_LOADING_ERROR,
    error,
  };
}