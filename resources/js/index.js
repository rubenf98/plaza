import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import Routes from "./routes";
import rootReducer from 'rootReducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('index')
)
