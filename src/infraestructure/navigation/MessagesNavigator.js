import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../../features/messages/screens/MessagesScreen";
import MessagesDetailScreen from "../../features/messages/screens/MessagesDetailScreen";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";


const MessageStack = createStackNavigator();

export const MessageNavigator = () => {
  const { colors, fonts } = useTheme();

  console.log("MessagesScreen:", MessagesScreen);

  return (
    <MessageStack.Navigator
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
            <Text style={[fonts.h2]}>BUZÓN</Text>
            <Text style={[fonts.h3]}>(SOLICITANTES)</Text>
          </View>
        ),

        headerLeft: () => (
          <View style={{ marginLeft: 20, marginRight: 10 }}>
            <Ionicons
              name={"people-outline"}
              size={38}
              color={colors.textColor}
            />
          </View>
        ),
      }}
    >
      <MessageStack.Screen
        name="BUZON DE MENSAJES"
        component={MessagesScreen}
      />



<MessageStack.Screen
  name="CHAT CON SOLICITANTE"
  component={MessagesDetailScreen}
  options={({ route, navigation }) => ({
    headerTitle: () => (
      <Text style={[fonts.h3, { textTransform: "uppercase" }]}>
        {route.params.name}
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
  })}
/>






    </MessageStack.Navigator>
  );
};

export default MessageNavigator;
