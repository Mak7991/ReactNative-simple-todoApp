import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar, ListItem, Text} from 'react-native';
import {
  Content,
  Header,
  Input,
  Item,
  Button,
  Icon,
  Container,
} from 'native-base';
// import TodoInput from './src/components/Input';
// import Todos from './src/components/List'

const App = (props) => {
  const [todo, setTodo] = useState('');
  useEffect(() => {
    if (props.edit) {
      setTodo(props.edit);
    }
  }, [props.edit]);

  return (
    <Container style={styles.container}>
      <Header
        style={{marginTop: StatusBar.currentHeight, backgroundColor: '#fff'}}>
        <Content style={styles.content}>
          <Item regular>
            <Input
              placeholder="Add Todo"
              onChange={(event) => {
                setTodo(event.target.value);
              }}
              value={todo}
            />
            <Button
              onPress={() => {
                if (todo.length) {
                  if (props.edit) {
                    props.updateTodo(todo);
                    setTodo('');
                  } else {
                    props.addTodo(todo);
                    setTodo('');
                  }
                }
              }}>
              <Icon name="add"></Icon>
            </Button>
          </Item>
        </Content>
      </Header>
      {/* <Content>
        <List
          renderRow={todo => 
            <ListItem>
              <Text>{todo}</Text>
            </ListItem>
          }
        />
      </Content> */}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

// const Main = () => {
//   const [todos, setTodos] = useState([]);
//   const [todo, setTodo] = useState({});
//   const [editingIndex, setEditingIndex] = useState(-1);
//   const addEventHandler = (todo) => {
//     setTodos([...todos, {name: todo, id: todos.length + 1}]);
//     // setTodos(items => {
//     //     return [...items, {name:todo}]
//     // })
//   };

//   const updateEventHandler = (item) => {
//     const newTodos = [...todos];
//     todo.name = item;
//     newTodos[editingIndex] = todo;
//     setTodos(newTodos);
//     setTodo({});
//     setEditingIndex(-1);
//   };

//   const deleteTodo = (id) => {
//     //     // console.log(index, todos);
//     //     // todos.filter((todo) => todo.id !== id)
//     const index = todos.findIndex((item) => item.id === id);
//     if (index > -1) {
//       const newTodos = [...todos];
//       newTodos.splice(index, 1);
//       setTodos(newTodos);
//       console.log(todos);
//     }
//   };

//   const editTodo = (id) => {
//     const index = todos.findIndex((item) => item.id === id);
//     if (index > -1) {
//       const item = todos[index];
//       setTodo(item);
//       setEditingIndex(index);
//     }
//   };

//   return (
//     <div>
//       <TodoBar
//         addTodo={addEventHandler}
//         updateTodo={updateEventHandler}
//         edit={todo.name}
//       />
//       <Todos items={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
//     </div>
//   );
// };
