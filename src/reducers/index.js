import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import dinhceo from './dinhceo'

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp