import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { HomeScreen } from "../../features/home/screens/HomeScreen";
import { HomeDetailScreen } from "../../features/home/screens/HomeDetailScreen";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import { Button1 } from "../../features/home/components/Button1";

const HomeStack = createStackNavigator();
export const HomeNavigator = () => {
  const { colors, fonts } = useTheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.baseColor,
          elevation: 10,
        },
      }}
    >
      <HomeStack.Screen
        name="SOLICITANTES"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.baseColor,
            elevation: 10,
          },

          headerTitle: () => <Text style={[fonts.h2]}>SOLICITANTES</Text>,

          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                marginRight: 10,
                gap: 10,
              }}
            >
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

        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.baseColor,
            elevation: 10,
          },
        }}

        
        component={HomeDetailScreen}
      />
    </HomeStack.Navigator>
  );
};
