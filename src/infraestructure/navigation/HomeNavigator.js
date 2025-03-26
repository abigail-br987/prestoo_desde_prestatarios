import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { HomeScreen } from "../../features/home/screens/HomeScreen";
import { HomeDetailScreen } from "../../features/home/screens/HomeDetailScreen";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import { Button1 } from "../../features/home/components/Button1";


const HomeStack = createStackNavigator();
export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen
        name="SOLICITANTES"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <View style={{
              flexDirection: "row",
              marginRight: 10,
              gap:10,
            }}>
              <Button1
                label="Filtros"
                onPress={() => console.log("Filtros clicked")}
              />
              <Button1
                label="Ordenar"
                onPress={() => console.log("Ordenar clicked")}
              />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="INFO DEL SOLICITANTE"
        component={HomeDetailScreen}
      />
    </HomeStack.Navigator>
  );
};

