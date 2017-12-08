import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { routes } from '../constants/index';

const App = ({ children }) => {
    return (
        <div>
            <h1>To Do's</h1>
            { children }
            <footer>
                <Link to={routes.ROOT}>Todos</Link>
                <Link to={routes.ABOUT}>About</Link>
                <Link to={routes.LOGIN}>Login</Link>
            </footer>
        </div>
    );
};

App.propTypes = {
    children: PropTypes.object
};

export default App;
