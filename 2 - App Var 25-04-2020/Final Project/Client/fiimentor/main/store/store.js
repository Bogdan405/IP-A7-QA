import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './User/userReducer';
import {tokenReducer} from './User/tokenReducer';
import type {AppState} from './AppState';
import {profesoriReducer} from './Profesor/profesorReducer';

const rootReducer = combineReducers({
  User: userReducer,
  Token: tokenReducer,
  profesori: profesoriReducer,
});

export const initializeStore = (initialState?: AppState) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );

