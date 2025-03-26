import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { MessagesScreen } from "../../features/messages/screens/MessagesScreen";


const DummyScreen = ({ title }) => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 24 }}>{title}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Inicio: "home",
  Mensajes: "chatbubble",
  Préstamos: "cash",
  Anuncios: "megaphone",
  Cuenta: "person",
};

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ size, color }) => (
    <Ionicons name={TAB_ICON[route.name]} size={size} color={color} />
  ),
  tabBarActiveTintColor: "#007AFF", 
  tabBarInactiveTintColor: "gray", 
  tabBarLabelStyle: { fontSize: 12 },
  tabBarStyle: { height: 100, paddingBottom: 50 },
});

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Inicio" component={MessagesScreen} />
    <Tab.Screen name="Mensajes" component={MessagesScreen} />
    <Tab.Screen name="Préstamos" component={MessagesScreen} />
    <Tab.Screen name="Anuncios" component={MessagesScreen} />
    <Tab.Screen name="Cuenta" component={MessagesScreen} />
  </Tab.Navigator>
);