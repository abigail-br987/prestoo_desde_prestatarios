import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const InputCard = ({ title, placeholder }) => {
  const { colors, fonts } = useTheme();

  return (
      <View style={{ gap: 10 }}>
        <Text style={[fonts.subheading]}>{title}</Text>
        <View
          style={{
            backgroundColor: colors.baseColor,
            paddingVertical: 10,
            paddingHorizontal: 15,
            elevation: 5,
            borderRadius: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[fonts.label2, { color: colors.lightTextColor }]}>
              {placeholder}
            </Text>

            <Ionicons
              name={"close-circle-outline"}
              size={25}
              color={colors.lightTextColor}
            />
          </View>
        </View>
      </View>

  );
};

export default InputCard;

