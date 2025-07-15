import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StudentCard({ name, age }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.age}>Edad: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "80%",
  },
  name: { fontSize: 18, fontWeight: "bold" },
  age: { fontSize: 16 },
});

