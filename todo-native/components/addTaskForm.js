import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function ToDoForm({ submitHandler }) {
  const [taskName, setTaskName] = useState("");

  const addTask = (val) => {
    setTaskName(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Task Here..."
        onChangeText={addTask}
      />
      <Button
        onPress={() => submitHandler(taskName)}
        title="Add Task"
        color="#5d5b6a"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 10,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
});
