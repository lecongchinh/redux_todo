let nextTodoId = 0;
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

export const deleteTodo = () => {
    return {
        type: 'DELETE_TODO'
    }
};

export const editTodo = (index, text) => {
    return {
        type: 'EDIT_TODO',
        index,
        text
    }
};