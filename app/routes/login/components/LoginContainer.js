import { connect } from 'react-redux';
import { loginUser } from '../../../actions/index';
import Login from './Login';

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogin: (user) => dispatch(loginUser(user))
    };
};

const LoginContainer = connect(
    mapDispatchToProps
)(Login);

export default LoginContainer;
