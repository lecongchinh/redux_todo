import React from 'react'
import '../css/index.css'

const Todo = ({onDeleteClick, onEditClick, element }) => (
    <div>
        <li>
            <div className="todo-text">{element}</div>
            <div>
                <button className="btn btn-danger" onClick = {onDeleteClick}>Delete</button>
                <button className="btn btn-warning" onClick = {onEditClick}>Edit</button>
            </div>

        </li>
    </div>
);


export default Todo