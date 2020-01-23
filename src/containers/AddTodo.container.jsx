import { bindActionCreators } from 'redux';
import {
  connect,
  // useSelector,
  useDispatch,
} from 'react-redux';
import { addTodo } from '../store/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
});

export const useAddTodo = () => {
  const state = {}; // useSelector
  const actions = bindActionCreators(
    {
      addTodo,
    },
    useDispatch(),
  );

  return { ...state, ...actions };
};

export const connectWithAddTodo = (Component) =>
  connect(mapStateToProps, mapDispatchToProps)(Component);

export const AddTodoContainerComponent = ({ children, ...dispatchToProps }) =>
  children(dispatchToProps);

export const AddTodoContainer = connectWithAddTodo(AddTodoContainerComponent);
