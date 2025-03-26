import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200ea",
    accent: "#03dac4", 
    background: "#f5f5f5", 
    surface: "#ffffff",
    text: "#333333", 
  },
  fonts: {
    regular: {
      fontFamily: "System",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "System",
      fontWeight: "500",
    },
    bold: {
      fontFamily: "System",
      fontWeight: "bold",
    },
  },
};