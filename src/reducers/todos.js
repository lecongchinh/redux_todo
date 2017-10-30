const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);

        case 'EDIT_TODO':
            // console.log(action);
            return state.map((todo) => (todo.id === action.id) ? {...todo, text: action.text} : todo);

        default:
            return state
    }
};

export default todos