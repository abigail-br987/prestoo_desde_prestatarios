import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { theme } from "../../../theme";
import { HomeNavigator } from "./HomeNavigator";
const Tab = createBottomTabNavigator();
import { MessageNavigator } from "./MessagesNavigator";
import MessagesScreen from "../../features/messages/screens/MessagesScreen";
import PrestamosScreen from "../../features/prestamos/PrestamosScreen";
import AnunciosScreen from "../../features/anuncios/AnunciosScreen";
import AccountNavigator from "./AccountNavigator";
import { useTheme } from "react-native-paper"
const TAB_ICON = {
  Home: "home",
  Mensajes: "chatbubble-outline",
  Préstamos: "cash-outline",
  Anuncios: "megaphone-outline",
  Cuenta: "person-outline",
};

const createScreenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, size, color }) => (
    <Ionicons
      name={TAB_ICON[route.name]}
      size={focused ? 30 : 24}
      color={theme.colors.textColor}
    />
  ),
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: "SofiaSansSemiCondensed-Bold",
  },
  tabBarStyle: {
    height: 55,
    backgroundColor: theme.colors.baseColor,
    elevation: 5,

  },
  tabBarItemStyle: {
    height: 85,
    borderRadius:5,
  },

  tabBarActiveTintColor: theme.colors.textColor,
  tabBarInactiveTintColor: theme.colors.textColor,
  tabBarActiveBackgroundColor: theme.colors.primaryLightColor,
});



export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Mensajes" component={MessageNavigator} />
    <Tab.Screen name="Préstamos" component={PrestamosScreen} />
    <Tab.Screen name="Anuncios" component={AnunciosScreen} />
    <Tab.Screen name="Cuenta" component={AccountNavigator} />
  </Tab.Navigator>
);
