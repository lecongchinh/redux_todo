import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import {deleteTodo} from "../actions/index";
import {editTodo} from "../actions/index";
import {addToStore} from "../actions/index";

const getVisibleTodos = (todos) => {
    return todos;
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos)
    }
};

const mapDispatchToProps = {
    onDeleteClick: deleteTodo,
    onEditClick: editTodo,
    addToStore: addToStore
};


const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList