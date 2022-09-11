import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {ThemeReducer, userReducer} from './index';

const rootReducer = combineReducers({
  userReducer: userReducer,
  ThemeReducer: ThemeReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
