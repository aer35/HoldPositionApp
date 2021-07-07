import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>This is your total portfolio</Text> */}
      <View style={styles.separator} lightColor="#fff" darkColor="#2c2a36" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c2a36",
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
