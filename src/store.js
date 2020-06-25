import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'


import thunk from 'redux-thunk';

import {
    composeWithDevTools
} from "redux-devtools-extension";

import connectRootReducer from './reducers';

export const history = createBrowserHistory()


const initialState = {};
const middleware = [thunk, routerMiddleware(history)];

const store = createStore(
    connectRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
