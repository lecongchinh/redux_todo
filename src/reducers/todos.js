const todos = (state = [], action) => {
    switch (action.type) {

        case "GET_DATA_SUCCESS":
            return action.data;

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

        default:
            return state
    }
};

export default todos