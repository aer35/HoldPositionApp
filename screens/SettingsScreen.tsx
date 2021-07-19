import * as React from "react";
import { useState } from "react";
import { StyleSheet, Switch } from "react-native";
import { wrap } from "yargs";

import { Text, View } from "../components/Themed";

export default function SettingsScreen() {
  // Does each setting require a function?

  // Function to handle the dark mode switch
  const [isEnabledDarkMode, setIsEnabledDarkMode] = useState(false);
  const toggleDarkMode = () =>
    setIsEnabledDarkMode((previousState) => !previousState);

  // function to handle the setting2 switch
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  // function to handle the setting3 switch
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  return (
    <View style={styles.container}>
      {/* If you decide you want to add a line before the first setting */}
      {/* <View style={styles.rowSeparator} lightColor="#fff" darkColor="#2c2a36" /> */}
      <View style={styles.row}>
        <Text style={styles.settingText}>Dark Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={"#f4f3f4"}
          onValueChange={toggleDarkMode}
          value={isEnabledDarkMode}
        />
      </View>
      <View style={styles.rowSeparator} lightColor="#fff" darkColor="#2c2a36" />
      <View style={styles.row}>
        <Text style={styles.settingText}>Setting 2</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={"#f4f3f4"}
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>
      <View style={styles.rowSeparator} lightColor="#fff" darkColor="#2c2a36" />
      <View style={styles.row}>
        <Text style={styles.settingText}>Setting 3</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={"#f4f3f4"}
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
      </View>
      {/* If you decide you want to add a line after the last setting */}
      {/* <View style={styles.rowSeparator} lightColor="#fff" darkColor="#2c2a36" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c2a36",
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
  row: {
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "#2c2a36",
    flexDirection: "row",
  },
  rowSeparator: {
    marginVertical: 0,
    height: 1,
    width: "100%",
  },
  settingText: {
    fontSize: 15,
    width: "85%",
    color: "#fff",
  },
});
