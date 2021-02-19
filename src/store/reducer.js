import { SatelliteSharp } from '@material-ui/icons';
import { GET_BOOK_REQUEST, GET_BOOK_SUCCESS, GET_BOOK_FAILED } from './actions';


const INITIAL_STATE = {
    books: [],
    isLoading: false
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
            
        default: return state;
    }
};

export default reducer;