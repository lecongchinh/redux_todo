import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import axios from 'axios'

function deleteTodoDatabase(id) {
    axios({
        method: 'delete',
        url: 'http://localhost:8000/delete-todo/' + `${id}`,
    })
}


const TodoList = ({todos, onDeleteClick, onEditClick,dataDinhceo}) => (
    <ul>
        {todos.map(todo => (
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
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
};

export default TodoList
