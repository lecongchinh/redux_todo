import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    preloadedState
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);