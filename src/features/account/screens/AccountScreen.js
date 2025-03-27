import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "../../messages/components/ActionButton";
import SettingsItem from "../components/SettingsItem";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import Preferencias from "../components/Preferencias";
const AccountScreen = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const showAlert = () => {
    Alert.alert("Información", "Este es un mensaje de ayuda.");
  };

  return (
    <View
      style={{
        padding: 15,
        gap: 20,
        backgroundColor: colors.secondaryLightColor,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/22.jpg" }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              elevation: 5,
            }}
          />

          <View>
            <Text style={[fonts.subheading]}>LUANA CÁCERES</Text>
            <Text style={[fonts.label2]}>+51 999 999 999</Text>
          </View>
        </View>

        <ActionButton
          onPress={() => navigation.navigate("EDITAR PERFIL")}
          iconName="create-outline"
          text="Editar"
          backgroundColor={colors.intensePrimaryAccent}
          textColor={colors.textColor}
        />
      </View>

      <Text style={[fonts.label2, {textAlign: "justify"}]}>
        Completa tu perfil y nuestro algoritmo te conectará con prestamistas
        según tus intereses. Recibirás notificaciones en la sección de Anuncios
        cuando haya un match. Tus datos están protegidos con nosotros.
      </Text>

      <Preferencias/>


      <View
        style={{
          backgroundColor: colors.intensePrimaryAccent,
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
          <Text style={[fonts.h2]}>PUNTAJE: 50000</Text>


          <TouchableOpacity onPress={showAlert}>
          <Ionicons name={"help-circle"} size={40} color={colors.textColor} />
      </TouchableOpacity>




        </View>
      </View>

      <SettingsItem
        label="MÁS MÉTODOS NO TRADICIONALES"
        iconName="diamond-outline"
      />

      <View style={{ gap: 5 }}>
        <SettingsItem
          label="PRIVACIDAD Y SEGURIDAD"
          iconName="shield-half-outline"
        />
        <SettingsItem
          label="PREFERENCIAS NOTIFICACIÓN"
          iconName="notifications-outline"
        />
        <SettingsItem label="MÉTODO DE PAGO" iconName="wallet-outline" />
        <SettingsItem label="IDIOMA" iconName="language-outline" />
      </View>

      <View style={{ gap: 5 }}>
        <SettingsItem label="FAQ" iconName="help-outline" />
        <SettingsItem label="CENTRO DE AYUDA" iconName="information-outline" />
        <SettingsItem
          label="PÓLITICA DE PRIVACIDAD"
          iconName="document-lock-outline"
        />
      </View>
    </View>
  );
};

export default AccountScreen;
