import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { routes } from '../constants/index';

const showLayout = (children) => {
    return (
        <div>
            <h1>To Do's</h1>
            { children }
            <footer>
                <Link to={routes.ROOT}>Todos</Link>
                <Link to={routes.ABOUT}>About</Link>
                <Link to={routes.SIGNIN}>Login</Link>
            </footer>
        </div>);
};

const App = ({children}) => {
    const { pathname } = children.props.location;
    return (
        <div className="container">
            {pathname === routes.SIGNIN || pathname === routes.SIGNIN
                ? children
                : showLayout(children)}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.object
};

export default App;
