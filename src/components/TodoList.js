import React from 'react'
import Todo from './Todo'
import '../css/index.css'
import axios from 'axios'
import {editTodoDatabase, deleteTodoDatabase} from "../crud";

class TodoList extends React.Component {

    componentWillMount() {
        console.log(this.props.getDataFromDatabase.bind(this));
        return this.props.getDataFromDatabase();
    }


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
