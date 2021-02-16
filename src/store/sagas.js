import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_BOOK_REQUEST, getBookSuccess, getBookFail} from './actions';
import { getBooksApi } from '../http/api'

function* getBookRequest(action) {
    try {
        const data = yield call(getBooksApi);
        yield put(getBookSuccess(data));
    } catch (e) {
        console.log(e.message)
    }
}

export default function* mySaga() {
    yield takeLatest(GET_BOOK_REQUEST, getBookRequest);
}