/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_ITEM_NAME = 'boilerplate/Home/CHANGE_ITEM_NAME';
export const LOAD_ITEMS = 'boilerplate/Home/LOAD_ITEMS_REQUEST';
export const ITEMS_LOADED = 'boilerplate/Home/LOAD_ITEMS_SUCCESS';
export const ITEMS_LOADING_ERROR = 'boilerplate/Home/LOAD_ITEMS_ERROR';

export const LOAD_HOME_BANNERS = 'boilerplate/Home/HOME_BANNERS_REQUEST';
export const HOME_BANNERS_LOADED = 'boilerplate/Home/HOME_BANNERS_SUCCESS';
export const HOME_BANNERS_LOADING_ERROR = 'boilerplate/Home/HOME_BANNERS_ERROR';
