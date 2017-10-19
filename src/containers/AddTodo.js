import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = ''
                }}
            >
                <input
                    ref={text => {
                        input = text
                    }}
                />
                <button type="submit">
                    <Router>
                        <div>
                            <Link to = "/add-todo">Add todo</Link>
                        </div>
                    </Router>
                </button>
            </form>
        </div>
    )
};
AddTodo = connect()(AddTodo);

export default AddTodo