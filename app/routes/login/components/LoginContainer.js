import { connect } from 'react-redux';
import { loginUser } from '../../../actions/index';
import Login from './Login';

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogin: (email, password) => dispatch(loginUser(email, password))
    };
};
const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        message: state.message,
    };
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;

