import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onDeleteClick, onEditClick}) => (
    <ul>
        {todos.map(todo => (
            <Todo onDeleteClick={() => onDeleteClick(todo.id)}

                  onEditClick = {() => {
                      let text = prompt('Change text', todo.text);
                      onEditClick(text)
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
