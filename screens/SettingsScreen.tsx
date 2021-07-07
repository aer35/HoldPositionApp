import * as React from "react";
import { useState } from "react";
import { StyleSheet, Switch } from "react-native";
import { wrap } from "yargs";

import { Text, View } from "../components/Themed";

export default function SettingsScreen() {
  // Function to handle the dark mode switch
  const [isEnabledDarkMode, setIsEnabledDarkMode] = useState(false);
  const toggleDarkMode = () =>
    setIsEnabledDarkMode((previousState) => !previousState);

  // function to handle the setting2 switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
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
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c2a36",
    flexDirection: "column",
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
    marginTop: 5,
    flex: -1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#2c2a36",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 0,
  },
  rowSeparator: {
    marginVertical: 0,
    height: 1,
    width: "100%",
  },
  settingText: {
    fontSize: 15,
    color: "#fff",
  },
});
