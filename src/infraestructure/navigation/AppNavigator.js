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
      size={focused ? 28 : 24}
      color={
        focused ? theme.colors.darkerPrimaryAccent : theme.colors.textColor
      }
    />
  ),
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: "SofiaSansSemiCondensed-Bold",
  },
  tabBarStyle: {
    backgroundColor: theme.colors.primaryLightColor,
    height: 60,
    paddingBottom: 15,
    paddingTop: 2,
    borderTopWidth: 2,
    borderColor: theme.colors.textColor,
  },
  tabBarActiveTintColor: theme.colors.darkerPrimaryAccent,
  tabBarInactiveTintColor: theme.colors.textColor,
});

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Mensajes" component={MessageNavigator} />
    <Tab.Screen name="Préstamos" component={PrestamosScreen} />
    <Tab.Screen name="Anuncios" component={HomeNavigator} />
    <Tab.Screen name="Cuenta" component={HomeNavigator} />
  </Tab.Navigator>
);
