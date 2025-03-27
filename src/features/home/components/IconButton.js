import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, iconName, color, style }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: color,
          padding: 5,
          elevation: 5,
          borderRadius: 50, 
          zIndex: 2,
        },
        style,
      ]}
    >
      <Ionicons name={iconName} size={24} color={"#053654"}/>
    </TouchableOpacity>
  );
};

export default IconButton;
