import React from 'react';
import { Button, useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Button1 = ({ label, onPress, icon }) => {
  const { colors } = useTheme();

  return (
    <Button
      onPress={onPress}
      textColor={colors.textColor}
      compact={true}
      style={{
        borderRadius: 5,
        elevation: 5,
      }}
      icon={() => icon && <Ionicons name={icon} size={20} color={colors.textColor} />}
    >
      {label}
    </Button>
  );
};
