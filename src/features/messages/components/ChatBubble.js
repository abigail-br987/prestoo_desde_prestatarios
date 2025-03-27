import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "react-native-paper";

const ChatBubble = ({ index, msg, profile, isUser }) => {

  const { colors, fonts } = useTheme();

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
};

export default ChatBubble;
