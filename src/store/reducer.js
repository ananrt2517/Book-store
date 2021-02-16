import { DECREMENT } from './actions';


const INITIAL_STATE = {

    count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case DECREMENT:

           return {

             ...state, count: state.count - 1,

           };

         default: return state;

    }

};

export default reducer;