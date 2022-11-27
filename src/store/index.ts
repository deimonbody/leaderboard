import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { userReducer } from './users/reducer';

export const reducer = combineReducers({
  users: userReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk)));
