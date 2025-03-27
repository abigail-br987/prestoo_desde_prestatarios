import React from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useTheme } from "react-native-paper";
import { profiles, messages } from "../../../utils/DummyData";

export const MessagesScreen = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const chatList = profiles.map((profile) => {
    const userMessages = messages.find((m) => m.profileId === profile.id)?.messages || [];
    const lastMessage = userMessages.length > 0 ? userMessages[userMessages.length - 1].text : "No hay mensajes aún.";
    return {
      id: profile.id,
      name: profile.name,
      avatar: profile.profileImage,
      lastMessage: lastMessage,
    };
  });

  return (
    <View style={ {flex:1, padding:10, backgroundColor: colors.baseColor }}> 
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flexDirection: "row", padding: 15, borderBottomWidth: 2, borderBottomColor: colors.textColor }}
            onPress={() => navigation.navigate("CHAT CON SOLICITANTE", { profileId: item.id, name: item.name })}
          >
            <Image source={{ uri: item.avatar }} style={{ width: 50, height: 50, borderRadius: 25, borderWidth:2, borderColor: colors.textColor, marginRight: 10, }} />
            <View style={{flex:1}}>
              <Text style={[fonts.h3]}> 
                {item.name}
              </Text>
              <Text style={[ fonts.label2]}> 
                {item.lastMessage}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MessagesScreen;
