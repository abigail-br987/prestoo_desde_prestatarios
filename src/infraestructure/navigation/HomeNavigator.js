import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { HomeScreen } from "../../features/home/screens/HomeScreen";
import { HomeDetailScreen } from "../../features/home/screens/HomeDetailScreen";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import { Button1 } from "../../features/home/components/Button1";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "../../features/messages/components/ActionButton";

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
        name="PRESTAMISTAS"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.baseColor,
            elevation: 10,
          },

          headerTitle: () => <Text style={[fonts.h2]}>PRESTAMISTAS</Text>,

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
        component={HomeDetailScreen}
        options={({ route, navigation }) => ({
          headerTitle: () => (
            <Text style={[fonts.h3, { textTransform: "uppercase" }]}>
              {route.params.profile.name}
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginHorizontal: 15 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color={colors.textColor} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <ActionButton
                onPress={() =>
                  navigation.navigate("Mensajes", {
                    screen: "CHAT CON SOLICITANTE",
                    params: {
                      profileId: route.params.profile.id,
                      name: route.params.profile.name,
                    },
                  })
                }
                iconName="chatbubble-ellipses"
                text="Contacto"
                backgroundColor={colors.thirdAccent}
                textColor={colors.textColor}
              />
            </View>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};
