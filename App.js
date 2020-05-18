import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./components/header";
import ToDoItem from "./components/todoItem";
import ToDoForm from "./components/addTaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTasks((prevTasks) => {
        return [{ id: Math.random(), name: text }, ...prevTasks];
      });
    } else {
      Alert.alert("OOPS", "Task Name must be atleast 4 letters long", [
        {
          text: "OK, I Understand.",
          onPress: () => console.log("Alert Closed"),
        },
      ]);
    }
  };

  const deleteTask = (id) => {
    console.log(id);
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id != id);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("Keyboard Dismissed.");
      }}
    >
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
    </TouchableWithoutFeedback>
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
