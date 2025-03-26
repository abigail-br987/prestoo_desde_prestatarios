import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    baseColor: "#FEFEF4", 
    darkerBaseColor: "#C4CEC4",
    primaryLightColor: "#D4FAF7",
    primaryAccent:"#00E7A5",
    darkerPrimaryAccent:"#058A64",
    secondAccent:"#9435DD",
    thirdAccent:"#FBCF7C",
    textColor:"#053654",
    lightTextColor:"#38677C",
    intensePrimaryAccent:"#6FF0E5",
  },
  fonts: {
    default: {
      fontFamily: "SofiaSansSemiCondensed-Bold", 
      fontSize: 16,
      color: "#053654",
    },
    h1: {
      fontFamily: "SofiaSansSemiCondensed-Black", 
      fontSize: 64,
      color: "#053654",
    },
    h2: {
      fontFamily: "SofiaSansSemiCondensed-Black", 
      fontSize: 36,
      letterSpacing: 1.5,
      color: "#053654",
    },
    h3: {
      fontFamily: "SofiaSansSemiCondensed-ExtraBold", 
      fontSize: 18,
      letterSpacing: 2,
      color: "#053654",
    },
    subheading: {
      fontFamily: "SofiaSansSemiCondensed-BoldItalic", 
      fontSize: 20,
      color: "#053654",
    },
    label1: {
      fontFamily: "SofiaSansSemiCondensed-Bold", 
      fontSize: 18,
      color: "#053654",
    },
    label11: {
      fontFamily: "SofiaSansSemiCondensed-Black", 
      fontSize: 25,
      color: "#053654",
    },
    label2: {
      fontFamily: "SofiaSansSemiCondensed-MediumItalic", 
      fontSize: 16,
      color: "#38677C",
    },
    labelLarge: {
      fontFamily: "SofiaSansSemiCondensed-Bold",
      fontSize: 16,
      color: "#053654",
    },

  },
 
};