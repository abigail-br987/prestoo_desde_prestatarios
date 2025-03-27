import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../theme";
import { HomeNavigator } from "./HomeNavigator";
import { MessageNavigator } from "./MessagesNavigator";
import AccountNavigator from "./AccountNavigator";
import PrestamosNavigator from "./PrestamosNavigator";
import AnunciosNavigator from "./AnunciosNavigator";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Mensajes: "chatbubble-outline",
  Préstamos: "cash-outline",
  Anuncios: "megaphone-outline",
  Cuenta: "person-outline",
};

const createScreenOptions = ({ route }) => ({
  headerShown: false,
  tabBarStyle: {
    paddingTop: 5, 
    height: 65,
  },
  tabBarActiveTintColor: theme.colors.thirdAccent,
  tabBarInactiveTintColor: theme.colors.textColor,

  tabBarIcon: ({ focused, size, color }) => {
    if (route.name === "Préstamos") {
      return (
        <Image
          source={require("../../../assets/logo.jpg")}
          style={{
            width: focused ? 90 : 75, 
            height: focused ? 80 : 75, 
            position: "absolute",
            bottom:-30,
            borderRadius: 50,
            
          }}
        />
      );
    }

    return (
      <Ionicons
        name={TAB_ICON[route.name]}
        size={focused ? 30 : 24}
        color={focused ? theme.colors.thirdAccent : theme.colors.textColor}
      />
    );
  },
});



export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Mensajes" component={MessageNavigator} />
    <Tab.Screen 
      name="Préstamos" 
      component={PrestamosNavigator} 
      options={{ tabBarLabel: "" }}
    />
    <Tab.Screen name="Anuncios" component={AnunciosNavigator} />
    <Tab.Screen name="Cuenta" component={AccountNavigator} />
  </Tab.Navigator>
);
