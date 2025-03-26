import React from "react";
import { Text } from "react-native-paper";
import { Provider as PaperProvider, useTheme } from "react-native-paper";

export const MessagesDetailScreen = () => {
  const theme = useTheme();

  return (
    <Text style={{ color: theme.colors.primary, fontSize: 16 }}>
      messages detail screen
    </Text>
  );
};
