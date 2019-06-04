/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_ITEM_NAME,
  ITEMS_LOADED,
  ITEMS_LOADING_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR

} from './constants';
import { Action } from 'utils/interfaces';
import { string, array, object } from 'prop-types';

// The initial state of the App
export type State = {
  readonly itemName: string;
  readonly items: ReadonlyArray<any>;
  readonly error: object;
  readonly product: object;
};

export const initialState: State = {
  itemName: '',
  items: [],
  error: null,
  product: {
    status: null,
    list: [],
    errors: null,
  }
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_ITEM_NAME:
        // Delete prefixed '@' from the github username
        draft.itemName = action.itemName.replace(/@/gi, '');
        break;
      case ITEMS_LOADED:
        draft.items = action.items;
        break;
      case ITEMS_LOADING_ERROR:
        draft.error = action.error;
        break;
      case GET_PRODUCTS:
        draft.product = { ...draft.product, status: 'loading' };
        break;
      case GET_PRODUCTS_SUCCESS:
        draft.product = {
          status: 'success',
          list: action.products,
          error: null
        };
        break;
      case GET_PRODUCTS_ERROR:
        draft.product = {
          status: 'error',
          error: action.error,
          list: []
        }
        break;
    }
  });

export default homeReducer;
