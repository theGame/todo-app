import { connect } from 'react-redux';
import { addTodo, removeTodo, updateTodo, moveTodo, getTodo } from '../../../actions/actionCreator';
import Todos from './Todos';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => dispatch(getTodo()),
        onAddTodo: (todo) => dispatch(addTodo(todo)),
        onRemoveTodo: (id) => dispatch(removeTodo(id)),
        updateTodo: (id, updates) => dispatch(updateTodo(id, updates)),
        moveTodo: (dragIndex, hoverIndex, todo) => dispatch(moveTodo(dragIndex, hoverIndex, todo))
    };
};

const TodosContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);

export default TodosContainer;
