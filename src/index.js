import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import App from './components/App';
import thunk from 'redux-thunk'

let store = createStore(
    todoApp,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);