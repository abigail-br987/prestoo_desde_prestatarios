import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import { profiles, messages } from "../../../utils/DummyData";
import ActionButton from "../components/ActionButton";
import ProfileHeader from "../components/ProfileHeader";
import ChatBubble from "../components/ChatBubble";
import MessageInput from "../components/MessageInput";

export const MessagesDetailScreen = ({ route }) => {
  const { colors } = useTheme();
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
        {chatMessages.map((msg, id) => {
          const isUser = msg.sender === "Tú";
          return (
            <ChatBubble
              key={id}
              index={id}
              msg={msg}
              profile={profile}
              isUser={isUser}
            />
          );
        })}
      </ScrollView>

      <MessageInput
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </View>
  );
};

export default MessagesDetailScreen;
