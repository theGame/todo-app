import { connect } from 'react-redux';
import { removeTodo, updateTodo } from '../../../actions/actionCreator';
import TodoDetail from './TodoDetail';

const mapStateToProps = (state, props) => {
    const { index } = props.params;

    return {
        todo: state.todos[index]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (id) => dispatch(removeTodo(id)),
        updateTodo: (id, updates) => dispatch(updateTodo(id, updates))
    };
};

const TodoDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoDetail);

export default TodoDetailContainer;
