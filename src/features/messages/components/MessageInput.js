import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";


const MessageInput = ({ message, setMessage, handleSendMessage }) => {
  const { fonts, colors } = useTheme();

  return (
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
      placeholderTextColor={colors.lighterTextColor}
      style={[fonts.label2, {flex:1}]}
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
  );
};

export default MessageInput;
