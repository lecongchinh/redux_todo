import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import {deleteTodo} from "../actions/index";
import {editTodo} from "../actions/index";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onTodoClick: id => {
//             dispatch(toggleTodo(id))
//         }
//     }
// };

const mapDispatchToProps = {
    onDeleteClick: deleteTodo,
    onEditClick: editTodo
};


const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList