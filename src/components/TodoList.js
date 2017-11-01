import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import axios from 'axios'
import {getTodo} from '../actions'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos,
            onDeleteClick,
            onEditClick
        }
    }

    componentDidMount() {
        let {dispatch} = this.props;
        axios({
            method: 'get',
            url: 'http://localhost:8000'
        })
            .then((res) => res.data)
            .then((datas) => dispatch(getTodo(datas.map(data => this.data))))
    }

    render() {
        return(
            <ul>
                {this.state.todos.map(todo => (
                    <Todo
                        onDeleteClick={() => {
                            onDeleteClick(todo.id);
                            deleteTodoDatabase(todo.id)
                        }}

                        onEditClick = {() => {
                            let text = prompt('Change text', todo.text);
                            onEditClick(todo.id,text);
                        }}

                        key={todo.id} {...todo}/>
                ))}
            </ul>
        )
    }

}

function deleteTodoDatabase(id) {
    axios({
        method: 'delete',
        url: 'http://localhost:8000/delete-todo/' + `${id}`,
    })
}



// const TodoList1 = ({todos, onDeleteClick, onEditClick}) => (
//     <ul>
//         {todos.map(todo => (
//             <Todo
//                 onDeleteClick={() => {
//                     onDeleteClick(todo.id);
//                     deleteTodoDatabase(todo.id)
//                 }}
//
//                   onEditClick = {() => {
//                       let text = prompt('Change text', todo.text);
//                       onEditClick(todo.id,text);
//                   }}
//
//                   key={todo.id} {...todo}/>
//         ))}
//     </ul>
// );

// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             completed: PropTypes.bool.isRequired,
//             text: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
// };

export default TodoList
