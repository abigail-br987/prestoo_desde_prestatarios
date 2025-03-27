import React from "react";
import { View, Text, FlatList } from "react-native";
import { useTheme } from "react-native-paper";
const anuncios = [
  {
    id: "1",
    type: "puntaje",
    message: "🎉 ¡Tu puntaje ha subido! Ahora tienes más confianza en la app.",
  },
  {
    id: "2",
    type: "prestamo",
    message:
      "🏦 ¡Felicidades! El banco confía más en ti y ahora puedes pedir un préstamo mayor.",
  },
  {
    id: "3",
    type: "recomendacion",
    message:
      "👍 Has recibido una recomendación de un usuario confiable. ¡Sigue así!",
  },
  {
    id: "4",
    type: "social",
    message:
      "🔗 Has validado tus redes sociales. Ahora eres más confiable en la comunidad.",
  },
];

const AnuncioItem = ({ anuncio }) => {
  const { colors, fonts } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.intensePrimaryAccent,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      }}
    >
      <Text style={[fonts.label2]}>{anuncio.message}</Text>
    </View>
  );
};

const AnunciosScreen = () => {
  const { colors, fonts } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primaryLightColor,
        padding: 20,
      }}
    >
      <FlatList
        data={anuncios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AnuncioItem anuncio={item} />}
      />
    </View>
  );
};
export default AnunciosScreen;
