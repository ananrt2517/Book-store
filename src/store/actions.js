export const GET_BOOK_REQUEST = '[HOME] GET_BOOK_REQUEST';
export const GET_BOOK_SUCCESS = '[HOME] GET_BOOK_SUCCESS';


export const getBookRequest = () => ({ type: GET_BOOK_REQUEST });
export const getBookSuccess = (payload) => ({ type: GET_BOOK_SUCCESS, payload});