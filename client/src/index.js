import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import App from './components/App'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store for Debugger
const store = createStore (
                reducers,
                /* preloadedState, */
                composeEnhancers(
                  applyMiddleware()
                ));
// Original Store
// const store = createStore(reducers)d

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
)
