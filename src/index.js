import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '../src/components/App'
import * as serviceWorker from './serviceWorker'

import reducers from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducers, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'))

serviceWorker.register()
