import React, { useEffect } from "react";
import { Text, useTheme } from "react-native-paper";
import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import IconButton from "../components/IconButton";
import { useSavedProfiles } from "../../../utils/SavedProfilesContext";

export const HomeDetailScreen = ({ route, navigation }) => {
  const { profile } = route.params;
  const { colors, fonts } = useTheme();
  const { savedProfiles, toggleSave } = useSavedProfiles();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colors.secondaryLightColor,
      }}
    >
      <View
        style={{
          backgroundColor: colors.intensePrimaryAccent,
          borderRadius: 15,
          padding: 20,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          gap: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <IconButton
            onPress={() => toggleSave(profile.id)}
            iconName={
              savedProfiles[profile.id] ? "bookmark" : "bookmark-outline"
            }
            color={colors.primaryLightColor}
          />
          <Text style={[fonts.h2, { flexShrink: 1 }]}>{profile.name}</Text>
        </View>

        <Image
          source={{ uri: profile.profileImage }}
          style={{
            width: "100%",
            height: 350,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: colors.textColor,
          }}
        />

        <View>
          <Text style={[fonts.h3, { textAlign: "justify" }]}>
            {profile.age} años | {profile.status}
          </Text>
          <Text style={[fonts.label2]}>{profile.shortDescription}</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.baseColor,
          padding: 15,
          borderRadius: 15,
          marginTop: 15,
          gap: 10,
        }}
      >
        <Text style={[fonts.subheading]}>
          TASA DE INTERÉS PREFERIDA: {profile.interestRate}
        </Text>
        <Text style={[fonts.subheading]}>
          TIEMPO DE DEVOLUCIÓN: {profile.repaymentTime}
        </Text>
      </View>
    </View>
  );
};
