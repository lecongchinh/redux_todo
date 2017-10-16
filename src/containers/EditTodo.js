import React from 'react'
import { connect } from 'react-redux'
import {  editTodo} from '../actions'

let EditTodo = ({dispatch}) => {
    return(
        <button onClick={() => {
            let text = prompt('Change text', "");
            dispatch(editTodo(text))
        }}>Edit</button>
    )
};

EditTodo = connect()(EditTodo);

export default EditTodo;