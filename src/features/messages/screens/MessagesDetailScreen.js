import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { profiles, messages } from "../../../utils/DummyData";
import IconButton from "../../home/components/IconButton";
import ActionButton from "../components/ActionButton";

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
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 15,
          backgroundColor: colors.baseColor,
          borderRadius: 10,
        }}
        onPress={() =>
          navigation.navigate("Home", {
            screen: "HomeDetailScreen",
            params: { profile },
          })
        }
      >
        <Image
          source={{ uri: profile?.profileImage }}
          style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={[fonts.h3]}>{profile?.name}</Text>
          <Text style={[fonts.label1]}>
            {profile?.age} años | {profile?.status}
          </Text>
          <Text style={[fonts.label2]}>{profile?.shortDescription}</Text>
        </View>
      </TouchableOpacity>

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
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                marginVertical: 5,
                alignSelf: isUser ? "flex-end" : "flex-start",
                justifyContent: isUser ? "flex-end" : "flex-start",
              }}
            >
              {!isUser && (
                <Image
                  source={{ uri: profile?.profileImage }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    marginRight: 8,
                    elevation: 5,
                  }}
                />
              )}
              <View
                style={{
                  maxWidth: "75%",
                  padding: 10,
                  borderRadius: 10,
                  elevation: 5,
                  backgroundColor: colors.darkerBaseColor,
                }}
              >
                <Text style={[fonts.label2]}>{msg.text}</Text>
                <Text style={[fonts.label2]}>{msg.timestamp}</Text>
              </View>
            </View>
          );
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
