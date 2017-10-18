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

        case 'TOGGLE_TODO': {
            state = state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
            // state.togglingTodoIndex = action.id;

            return state;
        }

        case 'DELETE_TODO':
            return state.filter(item => !item.completed);

        case 'EDIT_TODO':
            // return state.map(todo => (todo.id === state.togglingTodoIndex) ? {...todo, text: action.text} : todo);
            return state.map(todo =>
                (todo.completed)
                    ? {...todo, text: action.text, completed: false}
                    : todo
            );

        default:
            return state
    }
};

export default todos