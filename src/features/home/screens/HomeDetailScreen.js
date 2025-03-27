import React, { useEffect } from "react";
import { Text, useTheme, Button } from "react-native-paper";
import { View, Image, StyleSheet } from "react-native";
import { Button1 } from "../components/Button1";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomButton = ({ label, onPress }) => {
  const { colors, fonts } = useTheme();

  return (
    <Button
      mode="text"
      onPress={onPress}
      style={[styles.button, { borderColor: colors.textColor }]}
      textColor={colors.textColor}
    >
      {label}
    </Button>
  );
};

export const HomeDetailScreen = ({ route, navigation }) => {
  const { profile } = route.params;
  const { colors, fonts } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      title: `${profile.name} (SOLICITANTE)`,
      headerTitleStyle: {
        fontFamily: fonts?.label1?.fontFamily || "System",
      },
    });
  }, [navigation, profile.name, fonts]);

  return (
    <View style={{ flex: 1, padding: 20, gap: 25 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={{
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 18,
            backgroundColor: colors.primaryAccent,
            borderWidth: 2,
            borderColor: colors.textColor,
            borderRadius: 5,
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
          onPress={() => console.log("CONTACTAR")}
        >
          <Ionicons
            name={"chatbubble-ellipses"}
            size={24}
            color={colors.textColor}
          />
          <Text style={fonts.h3}>CONTACTAR</Text>
        </Pressable>

        <Ionicons
          name={"bookmark-outline"}
          size={35}
          color={colors.textColor}
        />
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[fonts.h2]}>{profile.name}</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={[fonts.h3]}>PUNTAJE:</Text>

            <Text style={[fonts.h2]}> {profile.score}</Text>
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
              width: 100,
              height: 100,
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
            <Text style={[styles.bodyText, { flexShrink: 1 }]}>
              Descripción: {profile.shortDescription}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 2,
            marginTop: 15,
            backgroundColor: colors.textColor,
          }}
        />
      </View>

      <View style={{ gap: 15 }}>
        <Text style={[fonts.label1]}>
          TASA DE INTERÉS PREFERIDA:{" "}
          <Text style={[fonts.label11]}>{profile.interestRate}</Text>
        </Text>

        <Text style={[fonts.label1]}>
          TIEMPO DE DEVOLUCIÓN:{" "}
          <Text style={[fonts.label11]}>{profile.repaymentTime}</Text>
        </Text>

        <Text style={[fonts.label1]}>
          MONTO SOLICITADO:{" "}
          <Text style={[fonts.label11]}>{profile.requestedAmount}</Text>
        </Text>

        <View>
          <Text style={[fonts.label1]}>MOTIVO DEL PRÉSTAMO:</Text>
          <Text style={[fonts.label2]}>
            {profile.loanReasonTags.join(", ")}
          </Text>
          {profile.loanExplanation && (
            <Text style={[fonts.label2]}>{profile.loanExplanation}</Text>
          )}
        </View>

        <View>
          <Text style={[fonts.label1]}>JUSTIFICACIÓN DE PAGO:</Text>

          <Text style={[fonts.label2]}>{profile.repaymentJustification}</Text>
        </View>

        <View>
          <Text style={[fonts.label1]}>HISTORIAL RECIENTE:</Text>
          {profile.loanHistory.map((loan, index) => (
            <Text key={index} style={[fonts.label2]}>
              - {loan}
            </Text>
          ))}
        </View>
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
