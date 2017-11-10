
import axios from 'axios'

let nextTodoId = 0;
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    }
};

export const editTodo = (id, text) => {
    return {
        type: 'EDIT_TODO',
        id,
        text
    }
};

export const addToStore = (data) => {
    return {
        type: 'ADD_TO_STORE',
        data
    }
};

export const getData = (text) => {
    return {
        type: 'GET_DATA',
        text
    }
};

export const getDataSuccess = (data, text) => {
    return {
        type: 'GET_DATA_SUCCESS',
        data,
        text
    }
};

export const getDataFail = (text) => {
    return {
        type: 'GET_DATA_FAIL',
        text
    }
};

export const getDataFromDatabase = () => {
    return dispatch => {
        dispatch(getData());
        axios.get('http://localhost:8000')
            .then((data) => {
                dispatch(getDataSuccess(data.data))
            })
            .catch((err) => {
                dispatch(getDataFail(err))
            })
    }
};

