const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case 'GET_DATA_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state
  }
};

export default dataReducer;

