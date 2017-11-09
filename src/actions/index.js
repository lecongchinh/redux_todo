
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

// export const getDataFromDatabase = () => {
//     const req = axios.get('http://localhost:8000');

//     return (dispatch) => {
//         req.then(({data}) => {
//             dispatch({type: 'FETCH_PROFILE', payload: data})
//         })
//     }
// }

// const GET_DATA = 'GET_DATA';
// const GET_DATA_FAIL='GET_DATA_FAIL';
// const GET_DATA_SUCCESS='GET_DATA_SUCCESS';


export const getData = () => {
    return {
        type: 'GET_DATA'
    }
};

export const getDataSuccess = (data) => {
    return {
        type: 'GET_DATA_SUCCESS',
        data
    }
};

export const getDataFail = () => {
    return {
        type: 'GET_DATA_FAIL'
    }
};

export const getDataFromDatabase = () => {
    return dispatch => {
        dispatch(getData());
        axios.get('http://localhost:8000')
            // .then(res => res.data)
            .then((data) => {
                dispatch(getDataSuccess(data.data))
            })
            .catch((err) => {
                dispatch(getDataFail(err))
                // console.log('err: ', err);
            })
    }
};

// export function getDataFromDatabase(dispatch) {
//     return getData().then(
//         data => dispatch(getDataSuccess('data load success', data)),
//         err => dispatch(getDataFail("fail load data", err))
//     )
// }


// export const componentDidMount = () => {
//     axios({
//         method: 'get',
//         url: 'http://localhost:8000'
//     })
//         .then(res => {
//             console.log(res);
//             return res.data
//         })
//         .then((data) => this.props.addToStore(data))
// }

// export const deleteTodoDatabase = (id) => {
//     axios({
//         method: 'delete',
//         url: 'http://localhost:8000/delete-todo/' + `${id}`,
//     })
// };

// export const editTodoDatabase = (id, text) => {
//     const edit = axios({
//         method: 'put',
//         url: 'http://localhost:8000/edit',
//         data: {
//             id: id,
//             element: text
//         }
//     })

//     return (dispatch) => {
//         edit.then(({data}) => {
//             dispatch
//         })
//     }

// };
