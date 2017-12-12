import { takeEvery, put, call } from 'redux-saga/effects';
import { loginUser } from './../../api';
import * as types from './../types';

function* handleServerResponse(message, success, failed, errorMsg) {
    console.log(arguments);
    if (message) {
        console.log('here 3');
        yield put(Object.assign({}, { type: success, message }));
    } else {
        console.log('here 4');
        yield put({ type: failed, error: errorMsg });
    }
}

export function* loginUserGen(action) {
    try {
        console.log('here 1');
        const { email, password } = action;
        const user = yield call(loginUser, email, password);
        console.log('here 2');
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
