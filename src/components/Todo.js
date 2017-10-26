import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onDeleteClick, onEditClick, text }) => (
    <div>
        <li>
            {text}
            <button onClick = {onDeleteClick}>Delete</button>
            <button onClick = {onEditClick}>Edit</button>

        </li>
    </div>
);

Todo.propTypes = {
    text: PropTypes.string.isRequired
};

export default Todo