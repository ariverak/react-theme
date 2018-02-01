import React from 'react';
import {render} from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from '../reducers/index'
import {Map as map} from 'immutable'
//middlewares
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import App from '../pages/app'


const store = createStore(reducers, map(), 
composeWithDevTools(applyMiddleware(logger,thunk))
)

render(<Provider store={store}>
            <App />
    </Provider>,document.getElementById("app"));