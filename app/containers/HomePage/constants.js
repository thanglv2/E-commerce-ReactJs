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
export const ITEMS_LOADED = 'boilerplate/Home/ITEMS_LOADED';
export const ITEMS_LOADING_ERROR = 'boilerplate/Home/ITEMS_LOADING_ERROR';
