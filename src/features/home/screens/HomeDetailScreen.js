import React, { useEffect } from "react";
import { Text, useTheme } from "react-native-paper";
import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import IconButton from "../components/IconButton";

export const HomeDetailScreen = ({ route, navigation }) => {
  const { profile } = route.params;
  const { colors, fonts } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        gap: 25,
        backgroundColor: colors.secondaryLightColor,
      }}
    >
      <View
        style={{
          elevation: 5,
        }}
      >
        <View
          style={{
            backgroundColor: colors.intensePrimaryAccent,
            padding: 15,
            elevation: 5,
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[fonts.h3]}>{profile.name}</Text>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text style={[fonts.subheading]}>PUNTAJE</Text>
              <Text style={[fonts.h2]}>{profile.score}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <Image
              source={{ uri: profile.profileImage }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: colors.textColor,
              }}
            />

            <View style={{ flex: 1 }}>
              <Text
                style={[fonts.label2, { flexShrink: 1, textAlign: "justify" }]}
              >
                {profile.age} años | {profile.status}{" "}
              </Text>
              <Text style={[fonts.label2]}>{profile.shortDescription}</Text>
            </View>
          </View>
        </View>

        <View
          style={{ padding: 15, backgroundColor: colors.baseColor, gap: 10 }}
        >
          <Text style={[fonts.subheading]}>
            MONTO SOLICITADO: {profile.requestedAmount}
          </Text>
          <Text style={[fonts.subheading]}>
            TASA DE INTERÉS PREFERIDA: {profile.interestRate}{" "}
          </Text>
          <Text style={[fonts.subheading]}>
            TIEMPO DE DEVOLUCIÓN: {profile.repaymentTime}{" "}
          </Text>
          <Text style={[fonts.subheading]}>MOTIVO DEL PRÉSTAMO:</Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {profile.loanReasonTags.map((tag, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: colors.primaryLightColor,
                  color: colors.textColor,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={[fonts.label2]}>{tag}</Text>
              </View>
            ))}
          </View>

          {profile.loanExplanation && (
            <Text style={[fonts.label2]}>{profile.loanExplanation}</Text>
          )}
        </View>
      </View>

      <View style={{ gap: 15 }}>
        <Text style={[fonts.h3]}>HISTORIAL RECIENTE:</Text>
        {profile.loanHistory.map((loan, index) => (
          <Text key={index} style={[fonts.label2]}>
            - {loan}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 16,
  },
  button: {
    marginLeft: 10,
    borderWidth: 2,
  },
});
