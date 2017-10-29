import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import axios from 'axios';

let AddTodo = ({ dispatch }) => {
    let input;

    function addIntoDatabase() {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/add-todo',
            data: {
                element: input.value
            }
        })
    }

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
                    <button type="submit" onClick={addIntoDatabase}>
                            Add Todo
                    </button>
            </form>

        </div>
    )



};
AddTodo = connect()(AddTodo);

export default AddTodo