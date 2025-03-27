import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../../features/messages/screens/MessagesScreen"
import MessagesDetailScreen from "../../features/messages/screens/MessagesDetailScreen";

const MessageStack = createStackNavigator();

export const MessageNavigator = () => {

  console.log("MessagesScreen:", MessagesScreen);


  return (
    <MessageStack.Navigator screenOptions={{ headerShown: true }}>
      <MessageStack.Screen
        name="BUZON DE MENSAJES"
        component={MessagesScreen}
      />
       <MessageStack.Screen
        name="CHAT CON SOLICITANTE"
        component={MessagesDetailScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </MessageStack.Navigator>
  );
};

export default MessageNavigator