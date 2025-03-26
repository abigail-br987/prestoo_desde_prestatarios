import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { theme } from "./theme";
import { Navigation } from "./src/infraestructure/navigation";
import { useFonts } from "expo-font";



export default function App() {

  const [fontsLoaded] = useFonts({
    "SofiaSansSemiCondensed-Regular": require("./assets/fonts/SofiaSansSemiCondensed-Regular.ttf"),
    "SofiaSansSemiCondensed-Medium": require("./assets/fonts/SofiaSansSemiCondensed-Medium.ttf"),
    "SofiaSansSemiCondensed-Bold": require("./assets/fonts/SofiaSansSemiCondensed-Bold.ttf"),
    "SofiaSansSemiCondensed-Black": require("./assets/fonts/SofiaSansSemiCondensed-Black.ttf"), 
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
      <Text variant="h1" style={{ color: theme.colors.primary }}>
      Welcome to React Native Paper!
        </Text>

        <Navigation/>
        
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
