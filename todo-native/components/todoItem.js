import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ToDoItem({ item, deleteTask }) {
  return (
    <View>
      <Text style={styles.item}>{item.name}</Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    marginStart: 10,
    marginEnd: 10,
    padding: 25,
    backgroundColor: "#fff",
    borderColor: "#222",
    borderWidth: 1,
    borderStyle: "dashed",
    fontSize: 24,
    fontWeight: "400",
    color: "#222",
  },
  deleteButton: {
    textAlign: "center",
    fontSize: 20,
  },
});
