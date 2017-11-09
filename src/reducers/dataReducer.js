const initialState = {
  element: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
        return {
        ...state,
        element: [],
        isFetching: true
      };
    case 'GET_DATA_SUCCESS':
        // console.log(action.data);
        return {
            isFetching: false,
            element: action.data
        };
    case 'GET_DATA_FAILURE':
        console.log(1234);
        return {
        isFetching: false,
        error: true
      };
    default:
      return state
  }
};

export default dataReducer;

