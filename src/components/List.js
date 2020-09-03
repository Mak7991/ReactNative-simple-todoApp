import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Todos = (props) => {
  const [todos, setTodos] = useState([]);

  // componentWillReceiveProps
  //static getDerivedStateFromProps
  useEffect(() => {
    let items = [...props.items];
    if (items.length) {
      items = items.map((item, i) => {
        return {
          ...item,
          class: parseInt(Math.random() * 10),
          // name:item.name,
          // age:item.age,
          // class:item.class
        };
      });
    }
    setTodos(items);
  }, [props.items]);
  console.log(todos);

  // let rows = todos.map((item, i) => (
  //   <View key={i} style={styles.todoList}>
  //     <Text style={styles.text}>{item.name}</Text>
  //     <TouchableOpacity
  //       onPress={() => {
  //         props.editTodo(item.id);
  //       }}>
  //       <AntDesign name="edit" size={40} color="black" />
  //     </TouchableOpacity>
  //     <TouchableOpacity
  //       onPress={() => {
  //         props.deleteTodo(item.id);
  //       }}>
  //       <AntDesign name="delete" size={40} color="black" />
  //     </TouchableOpacity>
  //   </View>
  // ));

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({item, i}) => {
          return (
            <View key={i} style={styles.todoList}>
              <Text style={styles.text}>{item.name}</Text>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {
                    props.editTodo(item.id);
                  }}>
                  <AntDesign name="edit" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.deleteTodo(item.id);
                  }}>
                  <AntDesign name="delete" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding:5,
  },
  todoList: {
    padding: 16,
    marginTop: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent:"space-between",
  },
  button:{
    flexDirection:'row',
  }
});

export default Todos;
