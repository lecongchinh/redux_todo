const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log(action);
            return [
                ...state,
                {
                    id: action.id,
                    element: action.text
                }
            ];

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);

        case 'EDIT_TODO':
            console.log(action);
            return state.map((todo) => (todo.id === action.id) ? {...todo, element: action.text} : todo);

        case 'ADD_TO_STORE':
            console.log(action.data);
            return action.data;
        default:
            return state
    }
};

export default todos