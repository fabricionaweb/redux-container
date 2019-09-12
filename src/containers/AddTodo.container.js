import { bindActionCreators } from "redux"
import { connect, useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../store/actions'

const AddTodoContainer = ({ children, ...dispatchToProps }) => children(dispatchToProps)

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
})

export const useAddTodo = () => {
  const state = {}; // useSelector
  const actions = bindActionCreators({
    addTodo,
  }, useDispatch())

  return { ...state, ...actions };
}

export const connectWithAddTodo = Component => connect(mapStateToProps, mapDispatchToProps)(Component);

export default connectWithAddTodo(AddTodoContainer)