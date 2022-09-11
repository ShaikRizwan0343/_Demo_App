/* eslint-disable prettier/prettier */
import {LIGHT_THEME, DARK_THEME} from './theme-constants';

export const initialState = {
  isDarkMode: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DARK_THEME:
      return {
        ...state,
        isDarkMode: true,
      };
    case LIGHT_THEME:
      return {
        ...state,
        isDarkMode: false,
      };
    default:
      return state;
  }
}
