import React, { createRef } from 'react';
import {
  // connectWithAddTodo,
  AddTodoContainer,
  // useAddTodo
} from '../containers/AddTodo.container';

const AddTodo = () => {
  const input = createRef();
  // const { addTodo } = useAddTodo(); // hooks
  // const { addTodo } = props; // connectorWith

  return (
    <AddTodoContainer>
      {({ addTodo }) => (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const { value } = input.current;

              if (!value.trim()) {
                return;
              }

              addTodo(value);
              e.currentTarget.reset();
            }}
          >
            <input ref={input} />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </AddTodoContainer>
  );
};

// export default connectWithAddTodo(AddTodo)
export default AddTodo;
