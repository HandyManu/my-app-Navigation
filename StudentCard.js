import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
export default function StudentCard({ name, age, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
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
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  age: { fontSize: 16 },
});
