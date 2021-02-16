import { SatelliteSharp } from '@material-ui/icons';
import { GET_BOOK_SUCCESS } from './actions';


const INITIAL_STATE = {
    books: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BOOK_SUCCESS:
            return {
                ...state, books: action.payload
            };
        default: return state;
    }
};

export default reducer;