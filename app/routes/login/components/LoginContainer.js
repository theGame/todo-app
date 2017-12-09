import { connect } from 'react-redux';
import { loginUser } from '../../../actions/index';
import Login from './Login';

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogin: (email, password) => dispatch(loginUser(email, password))
    };
};

const LoginContainer = connect(
    null,
    mapDispatchToProps
)(Login);

export default LoginContainer;

