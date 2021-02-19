import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_BOOK_REQUEST, getBookSuccess, getBookFailed, getBookIndividuallySuccess, GET_BOOK_INDIVIDUALLY_REQUEST} from './actions';
import { getBooksApi, getBookIndividuallyApi } from '../http/api'

function* getBookRequest(action) {
    try {
        const data = yield call(getBooksApi, action.query);

        yield put(getBookSuccess(data));
    } catch (e) {
        console.log(e.message);
        yield put(getBookFailed());
    }
}

function* getBookIndividuallyRequest(action) {
    try {
        const data = yield call(getBookIndividuallyApi, action.payload);

        yield put(getBookIndividuallySuccess(data));
    } catch (e) {
        console.log(e.message);
        yield put(getBookFailed());
    }
}

export default function* mySaga() {
    yield takeLatest(GET_BOOK_REQUEST, getBookRequest);
    yield takeLatest(GET_BOOK_INDIVIDUALLY_REQUEST, getBookIndividuallyRequest);
}