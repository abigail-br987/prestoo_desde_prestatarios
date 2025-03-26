import React from "react";
import { Text } from "react-native-paper";
import { Provider as PaperProvider, useTheme } from "react-native-paper";
import { View } from "react-native";
import { Image } from "react-native";

export const HomeDetailScreen = ({ route }) => {
    const { profile } = route.params;
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Image source={{ uri: profile.profileImage }} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{profile.name}</Text>
        <Text>Edad: {profile.age}</Text>
        <Text>Ocupación: {profile.status}</Text>
        <Text>Tasa de Interés: {profile.interestRate}</Text>
        <Text>Tiempo de Devolución: {profile.repaymentTime}</Text>
        <Text>Monto Solicitado: {profile.requestedAmount}</Text>
        <Text>Motivo del Préstamo: {profile.loanReasonTags.join(', ')}</Text>
        {profile.loanExplanation && <Text>Explicación: {profile.loanExplanation}</Text>}
        <Text>Justificación de Pago: {profile.repaymentJustification}</Text>
        <Text>Puntaje: {profile.score}</Text>
        <Text>Historial Reciente:</Text>
        {profile.loanHistory.map((loan, index) => (
          <Text key={index}>- {loan}</Text>
        ))}
        <Text>Descripción: {profile.shortDescription}</Text>
      </View>
    );
  };
  