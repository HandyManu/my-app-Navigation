import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo: Desarrollo Móvil</Text>
      <Text style={styles.description}>
        Aprende a crear apps increíbles con React Native y navegación.
      </Text>
      <Button
        title="Ver datos del estudiante"
        onPress={() => navigation.navigate("Student")}
      />
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
  title: { fontSize: 20, fontWeight: "bold" },
  description: { marginVertical: 10, textAlign: "center" },
});
