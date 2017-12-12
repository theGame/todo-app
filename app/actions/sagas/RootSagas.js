import { call, all } from 'redux-saga/effects';
import { watchLoginUser } from './LoginSaga';
import { watchAddTodo, watchRemoveTodo, watchUpdateTodo, watchGetTodos } from './TodosSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        call(watchGetTodos),
        call(watchAddTodo),
        call(watchRemoveTodo),
        call(watchUpdateTodo),
        call(watchLoginUser)
    ]);
}
