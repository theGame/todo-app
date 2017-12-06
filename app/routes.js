import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import { routes } from './constants/index';
import TodosContainer from './routes/todos/components/TodosContainer';
import About from './routes/about/components/About';
import TodoDetailContainer from './routes/todos/components/TodoDetailContainer';
import LoginContainer from './routes/login/components/LoginContainer';

export default (
    <Route path={routes.ROOT} component={App}>
        <IndexRoute component={TodosContainer} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.LOGIN} component={LoginContainer} />
        <Route path={routes.INDEX} component={TodoDetailContainer} />
    </Route>
);
