import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    me,
    loginSuccess,
    setAuthorizationToken,
    refreshAuthorizationToken
} from "./redux/auth/actions";
import jwtDecode from "jwt-decode";
import Routes from "./routes";
import rootReducer from './rootReducer';
import "antd/dist/antd.css";
import '../sass/index.scss'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            promise,
        )
    )
)

if (localStorage.token) {
    const token = jwtDecode(localStorage.token);
    const tokenExp = token.exp < Date.now() / 1000;

    if (tokenExp) {
        store.dispatch(refreshAuthorizationToken(localStorage.token));
    } else {
        setAuthorizationToken(localStorage.token);
        store.dispatch(me(localStorage.token));
    }
}

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('index')
)


