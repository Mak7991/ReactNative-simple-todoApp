import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Content, Input, Item} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TodoInput = (props) => {
  const [todo, setTodo] = useState('');
  useEffect(() => {
    if (props.edit) {
      setTodo(props.edit);
    }
  }, [props.edit]);
  console.log(todo);

  return (
    <View style={styles.container}>
      <Content>
        <Item>
          <Input
            placeholder="Add Todo"
            onChangeText={(text) => {
              setTodo(text);
            }}
            value={todo}
          />
          <TouchableOpacity
            onPress={() => {
              if (props.edit) {
                props.updateTodo(todo);
                setTodo('');
              } else {
                props.addTodo(todo);
                setTodo('');
              }
            }}>
            {props.edit ? (
              <AntDesign name="edit" size={40} color="black" />
            ) : (
              <AntDesign name="plussquareo" size={40} color="black" />
            )}
          </TouchableOpacity>
        </Item>
      </Content>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    backgroundColor: '#ffff',
    padding: 10,
  },
});

export default TodoInput;
