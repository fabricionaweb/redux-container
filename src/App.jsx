import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
