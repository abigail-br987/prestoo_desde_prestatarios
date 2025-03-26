import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { theme } from "./theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="regular" style={{ color: theme.colors.primary }}>
          Welcome to React Native Paper!
        </Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
