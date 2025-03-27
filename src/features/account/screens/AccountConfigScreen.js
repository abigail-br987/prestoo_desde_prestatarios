import React from "react";
import { View, Text, FlatList } from "react-native";
import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

const AccountConfigScreen = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    containerBorder: {
      padding: 10,
      borderColor: colors.textColor,
      borderWidth: 2,
    },
    container: {
      flex: 1,
      backgroundColor: colors.thirdAccent,
      padding: 10,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 15,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurar</Text>
      <View style={styles.containerBorder}></View>
    </View>
  );
};

export default AccountConfigScreen;
