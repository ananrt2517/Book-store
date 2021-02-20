import { GET_BOOK_REQUEST, GET_BOOK_SUCCESS, GET_BOOK_FAILED, GET_BOOK_INDIVIDUALLY_REQUEST, GET_BOOK_INDIVIDUALLY_SUCCESS } from './actions';


const INITIAL_STATE = {
    books: [],
    isLoading: false,
    current: {},
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BOOK_REQUEST:
            return {
                ...state, isLoading: true
            }

        case GET_BOOK_SUCCESS:
            return {
                ...state, books: action.payload, isLoading: false
            };

        case GET_BOOK_FAILED: {
            return {
                ...state, isLoading: false
            }
        }

        case GET_BOOK_INDIVIDUALLY_REQUEST:
            return {
                ...state, isLoading: true
            }

        case GET_BOOK_INDIVIDUALLY_SUCCESS:
            return {
                ...state, current: action.payload, isLoading: false
            }

        default:
            return state;
    }
};

export default reducer;