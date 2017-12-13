import { connect } from 'react-redux';
import { loginUser } from '../../../actions/actionCreator';
import Login from './Login';

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogin: (email, password) => dispatch(loginUser(email, password))
    };
};
const mapStateToProps = (state) => {
    const { isLoading, message } = state.login;
    return {
        isLoading,
        message
    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;

