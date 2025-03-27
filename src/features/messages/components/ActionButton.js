import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
const ActionButton = ({ onPress, iconName, text, backgroundColor, textColor }) => {
  const { fonts } = useTheme();
  return (
    <Pressable
      style={{
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: backgroundColor,
        borderRadius: 5,
        gap:10,
        flexDirection: "row",
        alignItems: "center",
        elevation: 5,
      }}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={25} color={textColor} />
      <Text style={[fonts.h3]}>{text}</Text>
    </Pressable>
  );
};

export default ActionButton;