import { takeEvery, put, call } from 'redux-saga/effects';
import { loginUser } from './../../api';
import * as types from './../types';

function* handleServerResponse(message, success, failed, errorMsg) {
    if (message) {
        yield put(Object.assign({}, { type: success, message }));
    } else {
        yield put({ type: failed, error: errorMsg });
    }
}

export function* loginUserGen(action) {
    try {
        const { email, password } = action;
        const user = yield call(loginUser, email, password);
        yield handleServerResponse(
            user,
            types.LOGIN_USER_SUCCESS,
            types.LOGIN_USER_FAILED,
            'NETWORK ERROR: Todo status wasn\'t updated',
            { user }
        );
    } catch(e) {
        yield put({
            type: types.LOGIN_USER_FAILED,
            error: e
        });
    }
}

export function* watchLoginUser() {
    yield takeEvery(types.LOGIN_USER_CLICK, loginUserGen);
}
