import { combineReducers } from 'redux'
import todos from './todos'
import todoReducers from './todoReducers'

const todoApp = combineReducers({
    todos, 
    todoReducers
});

export default todoApp