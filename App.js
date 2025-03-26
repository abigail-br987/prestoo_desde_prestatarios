import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { theme } from "./theme";
import { Navigation } from "./src/infraestructure/navigation";
import { useFonts } from "expo-font";
import { SavedProfilesProvider } from "./src/utils/SavedProfilesContext";


export default function App() {

  const [fontsLoaded] = useFonts({
    "SofiaSansSemiCondensed-Thin": require("./assets/fonts/SofiaSansSemiCondensed-Thin.ttf"),
    "SofiaSansSemiCondensed-ExtraLight": require("./assets/fonts/SofiaSansSemiCondensed-ExtraLight.ttf"),
    "SofiaSansSemiCondensed-Light": require("./assets/fonts/SofiaSansSemiCondensed-Light.ttf"),
    "SofiaSansSemiCondensed-Regular": require("./assets/fonts/SofiaSansSemiCondensed-Regular.ttf"),
    "SofiaSansSemiCondensed-Medium": require("./assets/fonts/SofiaSansSemiCondensed-Medium.ttf"),
    "SofiaSansSemiCondensed-SemiBold": require("./assets/fonts/SofiaSansSemiCondensed-SemiBold.ttf"),
    "SofiaSansSemiCondensed-Bold": require("./assets/fonts/SofiaSansSemiCondensed-Bold.ttf"),
    "SofiaSansSemiCondensed-Black": require("./assets/fonts/SofiaSansSemiCondensed-Black.ttf"),
    "SofiaSansSemiCondensed-ExtraBold": require("./assets/fonts/SofiaSansSemiCondensed-ExtraBold.ttf"),
    "SofiaSansSemiCondensed-ExtraBoldItalic": require("./assets/fonts/SofiaSansSemiCondensed-ExtraBoldItalic.ttf"),
    "SofiaSansSemiCondensed-ThinItalic": require("./assets/fonts/SofiaSansSemiCondensed-ThinItalic.ttf"),
    "SofiaSansSemiCondensed-ExtraLightItalic": require("./assets/fonts/SofiaSansSemiCondensed-ExtraLightItalic.ttf"),
    "SofiaSansSemiCondensed-LightItalic": require("./assets/fonts/SofiaSansSemiCondensed-LightItalic.ttf"),
    "SofiaSansSemiCondensed-Italic": require("./assets/fonts/SofiaSansSemiCondensed-Italic.ttf"),
    "SofiaSansSemiCondensed-MediumItalic": require("./assets/fonts/SofiaSansSemiCondensed-MediumItalic.ttf"),
    "SofiaSansSemiCondensed-SemiBoldItalic": require("./assets/fonts/SofiaSansSemiCondensed-SemiBoldItalic.ttf"),
    "SofiaSansSemiCondensed-BoldItalic": require("./assets/fonts/SofiaSansSemiCondensed-BoldItalic.ttf"),
    "SofiaSansSemiCondensed-BlackItalic": require("./assets/fonts/SofiaSansSemiCondensed-BlackItalic.ttf"),
  });
  
  if (!fontsLoaded) {
    return null; 
  }
  

  return (
    <SavedProfilesProvider>

    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Navigation/>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>

    </SavedProfilesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
