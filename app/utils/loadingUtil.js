export const loadingReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };
};

// export const createLoadingSelector = (actions) => (state) => {
//   // returns true only when all actions is not loading
//   console.log(state)
//   return _(actions)
//     .some((action) => _.get(state, `api.loading.${action}`));
// };

export const stateOfAction = action => action.slice(0, -8); // trim "_REQUEST" string

export const selectLoading = state => state.loading || {};
