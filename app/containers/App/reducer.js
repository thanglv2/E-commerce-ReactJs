/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: null,
  loggedIn: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      draft.currentUser = action.user;
      draft.loggedIn = true;
      break;
    case LOGIN_ERROR:
      draft.error = action.error;
      draft.loggedIn = false;
      break;
    case LOGOUT_SUCCESS:
      draft.loggedIn = false;
      draft.currentUser = null;
  }
});

export default appReducer;
