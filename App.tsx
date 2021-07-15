import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import * as sqlite from "expo-sqlite";
// import { BaseModel, types } from "expo-sqlite-orm";

// import * as eva from "@eva-design/eva";
// import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="light" />
        {/* Need to change this if changing the theme */}
      </SafeAreaProvider>
    );
  }
}
