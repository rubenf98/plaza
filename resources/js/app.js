import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

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

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('index')
)


