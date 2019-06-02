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
} from './constants';

// The initial state of the App
export const initialState = {
  itemName: '',
  items: [],
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
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
    }
  });

export default homeReducer;
