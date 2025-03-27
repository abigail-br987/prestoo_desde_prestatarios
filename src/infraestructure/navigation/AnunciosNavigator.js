import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../../features/messages/screens/MessagesScreen";
import MessagesDetailScreen from "../../features/messages/screens/MessagesDetailScreen";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import PrestamosScreen from "../../features/prestamos/PrestamosScreen";
import AnunciosScreen from "../../features/anuncios/AnunciosScreen";

const AnunciosStack = createStackNavigator();

export const AnunciosNavigator = () => {
  const { colors, fonts } = useTheme();

  return (
    <AnunciosStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.baseColor,
          elevation: 10,
        },
        headerBackTitleVisible: false,
        headerTitleAlign: "left",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text style={[fonts.h2]}>ANUNCIOS</Text>
          </View>
        ),

        headerLeft: () => (
          <View style={{ marginLeft: 20, marginRight: 10 }}>
            <Ionicons
              name={"star-outline"}
              size={38}
              color={colors.textColor}
            />
          </View>
        ),
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <Ionicons
              name={"help-circle-outline"}
              size={38}
              color={colors.textColor}
            />
          </View>
        ),
      }}
    >
      <AnunciosStack.Screen
        name="ANUNCIOS"
        component={AnunciosScreen}
      />
    </AnunciosStack.Navigator>
  );
};

export default AnunciosNavigator;
