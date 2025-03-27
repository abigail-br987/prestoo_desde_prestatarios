import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import { profiles, messages } from "../../../utils/DummyData";
import ActionButton from "../components/ActionButton";
import ProfileHeader from "../components/ProfileHeader";
import ChatBubble from "../components/ChatBubble";
import MessageInput from "../components/MessageInput";
import { Button } from "react-native-paper";
import { Button1 } from "../../home/components/Button1";

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
        padding: 15,
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
        style={{ flexDirection: "row", gap:10}}
      >
        <Button1 label="Recomendar" icon={"heart-outline"} onPress={() => console.log("Recomendar")} />
        <Button1 label="Reportar" icon={"warning-outline"} onPress={() => console.log("Reportar")} />

      </View>

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.darkerBaseColor,
          padding: 10,
        }}
      >
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
