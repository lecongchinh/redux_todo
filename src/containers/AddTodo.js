import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {addIntoDatabase} from '../crud'
// import axios from 'axios';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div className="add-todo">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    addIntoDatabase(input.value);
                    input.value = ''
                }}
            >
                <div className="col-md-8">
                    <input placeholder="Moi ban nhap: " className="form-control"
                           ref={text => {
                               input = text
                           }}
                    />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-success" type="submit">
                        Add Todo
                    </button>
                </div>
                <div className="clearfix"></div>
            </form>

        </div>
    )



};
AddTodo = connect()(AddTodo);

export default AddTodo