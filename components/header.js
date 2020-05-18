import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My TODOs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    padding: 40,
    backgroundColor: "#5d5b6a",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    fontWeight: "900",
  },
});
