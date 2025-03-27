import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { profiles, messages } from "../../../utils/DummyData";

export const MessagesDetailScreen = ({ route }) => {
  const { colors, fonts } = useTheme();
  const navigation = useNavigation();
  const { profileId } = route.params;

  const profile = profiles.find((p) => p.id === profileId);
  const chatMessages =
    messages.find((m) => m.profileId === profileId)?.messages || [];

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colors.baseColor }}>
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
          <Text
            style={[fonts.h3]}
          >
            {profile?.name}
          </Text>
          <Text
            style={[fonts.label1]}
          >
            {profile?.age} años | {profile?.status}
          </Text>
          <Text
            style={[fonts.label2]}
          >
            {profile?.shortDescription}
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          height: 2,
          marginVertical: 10,
          backgroundColor: colors.darkerBaseColor,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 10,
        }}
      >
        {[
          {
            icon: "alert-circle-outline",
            color: "red",
            text: "Reportar",
            action: () => console.log("Reportando usuario..."),
          },
          {
            icon: "bookmark-outline",
            color: "blue",
            text: "Guardar",
            action: () => console.log("Guardando usuario..."),
          },
          {
            icon: "star-outline",
            color: "orange",
            text: "Calificar",
            action: () => console.log("Calificando usuario..."),
          },
        ].map((btn, index) => (
          <TouchableOpacity
            key={index}
            style={{ alignItems: "center" }}
            onPress={btn.action}
          >
            <Ionicons name={btn.icon} size={24} color={btn.color} />
            <Text
              style={[fonts.label2]}
            >
              {btn.text}
            </Text>
          </TouchableOpacity>
        ))}
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
                  }}
                />
              )}
              <View
                style={{
                  maxWidth: "75%",
                  borderWidth: 2,
                  borderColor: colors.textColor,
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: isUser
                    ? colors.primaryAccent
                    : colors.darkerBaseColor,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.textColor,
                    fontFamily: fonts.default.fontFamily,
                  }}
                >
                  {msg.text}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.lightTextColor,
                    marginTop: 5,
                    alignSelf: "flex-end",
                    fontFamily: fonts.label2.fontFamily,
                  }}
                >
                  {msg.timestamp}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MessagesDetailScreen;
