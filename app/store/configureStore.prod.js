import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../actions/sagas/RootSagas.js';

const sagaMiddleware = createSagaMiddleware();
const initialState = {
    todos: [],
    login: {
        message: '',
        isLoading: false
    }
};

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
