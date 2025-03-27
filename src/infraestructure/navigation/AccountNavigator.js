import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { Button1 } from "../../features/home/components/Button1";
import AccountConfigScreen from "../../features/account/screens/AccountConfigScreen";
import AccountScreen from "../../features/account/screens/AccountScreen";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import { headerStyle } from "../../utils/styles";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const AccountStack = createStackNavigator();
export const AccountNavigator = () => {
 
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
        headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center", gap:10 }}>
              <Text style={[fonts.h2]}>PERFIL</Text>
              <Text style={[fonts.h3]}>(PATROCINADOR)</Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Ionicons name={"settings-outline"} size={38} color={colors.textColor} />
            </View>
          ),
        headerLeft: () => (
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/4.jpg" }}
            style={{
              width: 40,
              height: 40,
              elevation:10,
              marginHorizontal: 10,
              borderRadius: 40,
            }}
          />
        ),
      }}
    >
      <AccountStack.Screen name="TU PERFIL" component={AccountScreen} />
      <AccountStack.Screen
        name="EDITAR PERFIL"
        component={AccountConfigScreen}
      />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
