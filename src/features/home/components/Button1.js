import React from 'react';
import { Button, useTheme } from 'react-native-paper';

export const Button1 = ({ label, onPress }) => {
  const { colors } = useTheme();

  return (
    <Button
      mode="outlined"
      onPress={onPress}
      textColor={colors.textColor}
      compact={true}
      style={{
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.textColor
      }}    
    >
      {label}
    </Button>
  );
};
