import React from 'react';
import {render} from 'react-dom'
import AppContainer from '../pages/containers/app-container'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from '../reducers/index'
import {Map as map} from 'immutable'
//middlewares
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(reducers, map(), 
composeWithDevTools(
    applyMiddleware(logger,thunk)
)
)

let app = document.getElementById("app");
render(<Provider store={store}>
    <AppContainer/>
    </Provider>,app);