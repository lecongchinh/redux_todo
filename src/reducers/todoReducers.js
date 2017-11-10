const todoReducers = (state = [], action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                text: 'data is fetching'
            }
        // case 'GET_DATA_SUCCESS':
        //     return {
        //         ...action.data,
        //         text: 'fetch data success'
        //     }
        case 'GET_DATA_FAILURE':
            console.log(1234);
            return {
            text: 'fetch data fail'
            }
        default:
            return state
    }
};

export default todoReducers