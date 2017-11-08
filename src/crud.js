
import axios from 'axios'

export const editTodoDatabase = (id, text) => {
    axios({
        method: 'put',
        url: 'http://localhost:8000/edit',
        data: {
            id: id,
            element: text
        }
    })
};

export const deleteTodoDatabase = (id) => {
    axios({
        method: 'delete',
        url: 'http://localhost:8000/delete-todo/' + `${id}`,
    })
};

export const addIntoDatabase = (input) => {
    axios({
        method: 'POST',
        url: 'http://localhost:8000/add-todo',
        data: {
            element: input
        }
    })
};



