export const GET_BOOK_REQUEST = '[HOME] GET_BOOK_REQUEST';
export const GET_BOOK_SUCCESS = '[HOME] GET_BOOK_SUCCESS';
export const GET_BOOK_FAILED = '[HOME] GET_BOOK_FAILED';

export const GET_BOOK_INDIVIDUALLY_REQUEST = '[BOOK]  GET_BOOK_INDIVIDUALLY_REQUEST';
export const GET_BOOK_INDIVIDUALLY_SUCCESS = '[BOOK] GET_BOOK_INDIVIDUALLY_SUCCESS ';

export const getBookRequest = (query) => ({ type: GET_BOOK_REQUEST, query });
export const getBookSuccess = (payload) => ({ type: GET_BOOK_SUCCESS, payload});
export const getBookFailed = () => ({ type: GET_BOOK_FAILED });

export const getBookIndividuallyRequest = (payload) => ({ type: GET_BOOK_INDIVIDUALLY_REQUEST, payload });
export const getBookIndividuallySuccess = (payload) => ({ type: GET_BOOK_INDIVIDUALLY_SUCCESS, payload });