import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useTheme } from "react-native-paper";
import { profiles, messages } from "../../../utils/DummyData";

export const MessagesScreen = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const chatList = profiles.map((profile) => {
    const userMessages =
      messages.find((m) => m.profileId === profile.id)?.messages || [];
    const lastMessage =
      userMessages.length > 0
        ? userMessages[userMessages.length - 1].text
        : "No hay mensajes aún.";
    return {
      id: profile.id,
      name: profile.name,
      avatar: profile.profileImage,
      lastMessage: lastMessage,
    };
  });

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical:15,
        backgroundColor: colors.primaryLightColor,
      }}
    >
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              padding: 15,
              backgroundColor: colors.baseColor,
              elevation:5,
              marginBottom:10,
              borderRadius:5,
            }}
            onPress={() =>
              navigation.navigate("CHAT CON SOLICITANTE", {
                profileId: item.id,
                name: item.name,
              })
            }
          >
            <Image
              source={{ uri: item.avatar }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                elevation: 5,
                marginRight: 10,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={[fonts.h3]}>{item.name}</Text>
              <Text style={[fonts.label2]}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MessagesScreen;
