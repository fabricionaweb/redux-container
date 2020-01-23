import React from 'react'
import { 
  // connectWithAddTodo, 
  AddTodoContainer, 
  // useAddTodo 
} from '../containers/AddTodo.container'

const AddTodo = (props) => {
  let input
  // const { addTodo } = useAddTodo(); // hooks
  // const { addTodo } = props; // connectorWith

  return (
    <AddTodoContainer>
      {({ addTodo }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()

              if (!input.value.trim()) {
                return
              }

              addTodo(input.value)
              input.value = ''
            }}
          >
            <input ref={node => (input = node)} />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </AddTodoContainer>
  )
}

// export default connectWithAddTodo(AddTodo)
export default AddTodo