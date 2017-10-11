import React from 'react'
import { connect } from 'react-redux'
import {  deleteTodo} from '../actions'

let DeleteTodo = ({dispatch}) => {
    return(
        <button onClick={() => {dispatch(deleteTodo())}}>Delete</button>
    )
};

DeleteTodo = connect()(DeleteTodo);

export default DeleteTodo;