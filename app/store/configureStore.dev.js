import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import DevTools from '../containers/DevTools';
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
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
