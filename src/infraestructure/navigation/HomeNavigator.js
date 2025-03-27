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
import { Pressable } from "react-native";

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
  component={HomeDetailScreen}
  options={({ route, navigation }) => ({
    headerTitle: () => (
      <Text style={[fonts.h3, { textTransform: "uppercase" }]}>
        {route.params.profile.name}
      </Text>
    ),
    headerLeft: () => (
      <TouchableOpacity
        style={{ marginLeft: 15 }}
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
        <Pressable
          style={{
            paddingVertical: 5,
            paddingHorizontal: 12,
            backgroundColor: colors.thirdAccent,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            elevation: 5,
          }}
          onPress={() =>
            navigation.navigate("Mensajes", {
              screen: "CHAT CON SOLICITANTE",
              params: { profileId: route.params.profile.id, name: route.params.profile.name },
            })
          }
        >
          <Ionicons
            name="chatbubble-ellipses"
            size={15}
            color={colors.textColor}
          />
          <Text style={[fonts.h3, { marginLeft: 5 }]}>Contacto</Text>
        </Pressable>
      </View>
    ),
  })}
/>




    </HomeStack.Navigator>




  );
};
