import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Header from "./components/header";
import ToDoItem from "./components/todoItem";
import ToDoForm from "./components/addTaskForm";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task One" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
    { id: 4, name: "Task 4" },
    { id: 5, name: "Task 5" },
    { id: 6, name: "Task 6" },
    { id: 7, name: "Task 7" },
  ]);

  const submitHandler = (text) => {
    setTasks((prevTasks) => {
      return [{ id: Math.random(), name: text }, ...prevTasks];
    });
  };

  const deleteTask = (id) => {
    console.log(id);
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <ToDoForm submitHandler={submitHandler} />
        <View style={styles.content}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={tasks}
            renderItem={({ item }) => (
              <ToDoItem item={item} deleteTask={deleteTask} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    width: 200,
    borderColor: "#ccc",
  },
});
