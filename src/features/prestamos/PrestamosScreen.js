import React from "react";
import { View, Text, FlatList } from "react-native";
import { useTheme } from "react-native-paper";

const prestamos = [
  {
    id: "1",
    prestatario: "Carlos Gómez",
    monto: 150,
    fechaVencimiento: "10 de abril de 2025",
    estado: "A tiempo",
  },
  {
    id: "2",
    prestatario: "Ana Rodríguez",
    monto: 300,
    fechaVencimiento: "30 de marzo de 2025",
    estado: "Retrasado",
  },
  {
    id: "3",
    prestatario: "Luis Pérez",
    monto: 500,
    fechaVencimiento: "15 de mayo de 2025",
    estado: "A tiempo",
  },
];

const PrestamoItem = ({ prestamo }) => {
  const { colors, fonts } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.baseColor,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 5,
      }}
    >
      <Text style={[fonts.h3]}>{prestamo.prestatario}</Text>
      <Text style={[fonts.label2]}>💰 S/{prestamo.monto}</Text>
      <Text style={[fonts.label2]}>
        📅 Vence el {prestamo.fechaVencimiento}
      </Text>
      <Text
        style={[
          fonts.label2,
          {
            marginTop: 5,
            color: prestamo.estado === "Retrasado" ? "red" : "green",
          },
        ]}
      >
        {prestamo.estado === "Retrasado" ? "⚠️ Retrasado" : "✅ A tiempo"}
      </Text>
    </View>
  );
};

const PrestamosScreen = () => {
  const { colors, fonts } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.secondaryLightColor,
        padding: 20,
      }}
    >

      <FlatList
        data={prestamos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PrestamoItem prestamo={item} />}
      />
    </View>
  );
};

export default PrestamosScreen;
