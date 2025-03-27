import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    baseColor: "#fafaf2", 
    darkerBaseColor: "#C4CEC4",
    primaryLightColor: "#D1FBF9",
    primaryAccent:"#00E7A5",
    secondAccent:"#9435DD",
    thirdAccent:"#FFAA01",
    textColor:"#053654",
    lightTextColor:"#38677C",
    secondaryLightColor:"#ffdfa0",
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
      fontSize: 40,
      color: "#053654",
    },
    h2: {
      fontFamily: "SofiaSansSemiCondensed-Black", 
      fontSize: 26,
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
      fontFamily: "SofiaSansSemiCondensed-Bold", 
      fontSize: 15,
      color: "#053654",
      letterSpacing: 2,
      textTransform: "uppercase",

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
      fontFamily: "SofiaSansSemiCondensed-SemiBold", 
      fontSize: 16,
      color: "#053654",
    },
    labelLarge: {
      fontFamily: "SofiaSansSemiCondensed-Bold",
      fontSize: 16,
      color: "#053654",
    },

  },
 
};