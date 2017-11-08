import { combineReducers } from 'redux'
import todos from './todos'
import dataReducer from './dataReducer'

const todoApp = combineReducers({
    todos,
    dataReducer
});

export default todoApp