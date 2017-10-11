import React from 'react'
import { connect } from 'react-redux'
import {  deleteTodo} from '../actions'

let DeleteTodo = ({dispatch}) => {
    return(
        <div>
            <form>
                <button type="submit">
                    Delete
                </button>
            </form>
        </div>
    )
};

DeleteTodo = connect()(DeleteTodo);

export default DeleteTodo;