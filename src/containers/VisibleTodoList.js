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


// trong 1 cục data từ store(có rất nhiều data khac' nhau.but e chi muon lay data ma component e muon lay thoi thi em se truyen vao
// component do thong qua mapStateToProps)


const mapDispatchToProps = {
    onDeleteClick: deleteTodo,
    onEditClick: editTodo
};


const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList