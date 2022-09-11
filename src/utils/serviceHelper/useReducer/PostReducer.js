import {ACTION_TYPES} from './useReducerConstants';

export const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false,
};

export const PostReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        loading: true,
        error: false,
        post: {},
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        post: {},
      };
    default:
      return state;
  }
};
