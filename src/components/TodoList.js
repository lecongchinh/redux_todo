import React from 'react'
import Todo from './Todo'
import axios from 'axios'
import '../css/index.css'
import {editTodoDatabase, deleteTodoDatabase} from "../crud";

class TodoList extends React.Component {
    componentWillMount() {
        this.props.getDataFromDatabase();
    }

    // componentWillReceiveProps() {
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:8000'
    //     })
    //         .then(res => {
    //             console.log(res);
    //             return res.data
    //         })
    //         .then(data => this.props.addToStore(data))
    // }

    render() {
        return(
            <div className="todo-element">
                <ul>
                    {this.props.todos.map(todo => (
                        <Todo
                            onDeleteClick={() => {
                                this.props.onDeleteClick(todo.id);
                                deleteTodoDatabase(todo.id)
                            }}

                            onEditClick = {() => {
                                let text = prompt('Change text', todo.element);
                                if(text !== null) {
                                    if(text.trim() !== '') {
                                        this.props.onEditClick(todo.id, text);
                                        editTodoDatabase(todo.id, text)
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

export default TodoList
