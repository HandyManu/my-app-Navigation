import React from "react";
import { View, Button, StyleSheet } from "react-native";
import StudentCard from "./StudentCard.js";
export default function StudentScreen({ navigation }) {
  const student = {
    name: "Ana Martínez",
    age: 21,
    image: require("./assets/student.png"),
  };

  return (
    <View style={styles.container}>
      <StudentCard
        name={student.name}
        age={student.age}
        image={student.image}
      />
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
