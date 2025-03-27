import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";

import AccountScreen from "../../features/account/screens/AccountScreen";
import AccountConfigScreen from "../../features/account/screens/AccountConfigScreen";

const AccountStack = createStackNavigator();

const AccountNavigator = () => {
  const { colors, fonts } = useTheme();

  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.baseColor,
          elevation: 10,
        },
        headerBackTitleVisible: false,
        headerTitleAlign: "left",
        headerLeft: () => (
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/4.jpg" }}
            style={{
              width: 40,
              height: 40,
              elevation: 10,
              marginHorizontal: 10,
              borderRadius: 40,
            }}
          />
        ),
      }}
    >
      <AccountStack.Screen
        name="TU PERFIL"
        component={AccountScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Text style={[fonts.h2]}>PERFIL</Text>
              <Text style={[fonts.h3]}>(PATROCINADOR)</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate("EDITAR PERFIL")}
            >
              <Ionicons name="create-outline" size={38} color={colors.textColor} />
            </TouchableOpacity>
          ),
        })}
      />
      
      <AccountStack.Screen
        name="EDITAR PERFIL"
        component={AccountConfigScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Text style={[fonts.h2]}>EDITAR PERFIL</Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color={colors.textColor} />
            </TouchableOpacity>
          ),
        })}
      />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
