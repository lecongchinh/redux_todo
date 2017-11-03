import React from 'react'
import Todo from './Todo'
import axios from 'axios'
import '../css/index.css'

class TodoList extends React.Component {

    editTodoDatabase = (id, text) => {
        axios({
            method: 'put',
            url: 'http://localhost:8000/edit',
            data: {
                id: id,
                element: text
            }
        })
    };

    deleteTodoDatabase = (id) => {
        axios({
            method: 'delete',
            url: 'http://localhost:8000/delete-todo/' + `${id}`,
        })
    };

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8000'
        })
            .then(res => {
                console.log(res);
                return res.data
            })
            .then((data) => this.props.addToStore(data))
    }

    render() {
        return(
            <div className="todo-element">
                <ul>
                    {this.props.todos.map(todo => (
                        <Todo
                            onDeleteClick={() => {
                                this.props.onDeleteClick(todo.id);
                                this.deleteTodoDatabase(todo.id)
                            }}

                            onEditClick = {() => {
                                let text = prompt('Change text', todo.element);
                                if(text !== null) {
                                    if(text.trim() !== '') {
                                        this.props.onEditClick(todo.id, text);
                                        this.editTodoDatabase(todo.id, text)
                                    }
                                }
                            }}

                            key={todo.id} {...todo}/>
                    ))}
                </ul>
            </div>
        )
    }

}





// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             completed: PropTypes.bool.isRequired,
//             text: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
// };

// TodoList = connect()(TodoList);

export default TodoList
