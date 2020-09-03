import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import TodoInput from './src/components/Input';
import Todos from './src/components/List';
import Header from './src/components/header';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [editingIndex, setEditingIndex] = useState(-1);
  const addEventHandler = (todo) => {
    // console.warn(todo);
    setTodos([...todos, {name: todo, id: todos.length}]);
    // setTodos(items => {
    //     return [...items, {name:todo}]
    // })
  };
  

  const updateEventHandler = (item) => {
    const newTodos = [...todos];
    todo.name = item;
    newTodos[editingIndex] = todo;
    setTodos(newTodos);
    setTodo({});
    setEditingIndex(-1);
  };

  const deleteTodo = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    if (index > -1) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
      console.log(todos);
    }
  };

  const editTodo = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    if (index > -1) {
      const item = todos[index];
      setTodo(item);
      setEditingIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <TodoInput
        addTodo={addEventHandler}
        updateTodo={updateEventHandler}
        edit={todo.name}
        style={styles.todoInput}
      />
      <Todos
        items={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});

export default Todo;
