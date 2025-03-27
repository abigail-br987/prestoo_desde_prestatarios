import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { profiles, messages } from "../../../utils/DummyData";
import ActionButton from "../components/ActionButton";
import ProfileHeader from "../components/ProfileHeader";
import ChatBubble from "../components/ChatBubble";

export const MessagesDetailScreen = ({ route }) => {
  const { colors, fonts } = useTheme();
  const navigation = useNavigation();
  const { profileId } = route.params;

  const profile = profiles.find((p) => p.id === profileId);
  const chatMessages =
    messages.find((m) => m.profileId === profileId)?.messages || [];

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colors.baseColor,
        gap: 10,
      }}
    >
      <ProfileHeader profile={profile} />

      <ActionButton
        onPress={() => console.log("alert")}
        iconName="card-outline"
        text="Realizar Préstamo"
        backgroundColor={colors.intensePrimaryAccent}
        textColor={colors.textColor}
      />

      <View
        style={{ flexDirection: "row", justifyContent: "flex-start", gap: 10 }}
      >
        <ActionButton
          onPress={() => console.log("alert")}
          iconName="star-outline"
          text="Recomendar"
          backgroundColor={colors.thirdAccent}
          textColor={colors.textColor}
        />
        <ActionButton
          onPress={() => console.log("alert")}
          iconName="alert-circle-outline"
          text="Reportar"
          backgroundColor={colors.customRed}
          textColor={colors.textColor}
        />
      </View>

      <ScrollView style={{ flex: 1, marginTop: 10 }}>
        {chatMessages.map((msg, index) => {
          const isUser = msg.sender === "Tú";
          return <ChatBubble key={index} msg={msg} profile={profile} isUser={isUser} />;
        })}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          backgroundColor: colors.baseColor,
          borderTopWidth: 1,
          borderTopColor: colors.borderColor,
        }}
      >
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Escribe tu mensaje..."
          placeholderTextColor={colors.textColor}
          style={{
            flex: 1,
            backgroundColor: colors.lightBaseColor,
            borderRadius: 20,
            paddingHorizontal: 15,
            paddingVertical: 8,
            marginRight: 10,
            color: colors.textColor,
          }}
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <Ionicons
            name="send"
            size={25}
            color={colors.textColor}
            style={{ padding: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessagesDetailScreen;
