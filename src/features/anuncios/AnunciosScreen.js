import React from "react";
import { View, Text, FlatList } from "react-native";
import { useTheme } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const anuncios = [
  {
    id: "1",
    title: "¡Puntaje Subido!",
    message: "🎉 ¡Tu puntaje ha subido! Ahora tienes más confianza en la app.",
  },
  {
    id: "2",
    title: "Nuevo Préstamo Aprobado",
    message:
      "🏦 ¡Felicidades! El banco confía más en ti y ahora puedes pedir un préstamo mayor.",
  },
  {
    id: "3",
    title: "Recomendación Recibida",
    message:
      "👍 Has recibido una recomendación de un usuario confiable. ¡Sigue así!",
  },
  {
    id: "4",
    title: "Redes Sociales Validadas",
    message:
      "🔗 Has validado tus redes sociales. Ahora eres más confiable en la comunidad.",
  },
];

const AnuncioItem = ({ anuncio }) => {
  const { colors, fonts } = useTheme();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.baseColor,
        elevation: 5,
        marginBottom: 10,
        borderRadius: 5,
      }}
      onPress={() => console.log("anuncio")}
    >
      <View style={{ flex: 1 }}>
        <Text style={[fonts.h3]}>{anuncio.title}</Text> 
        <Text style={[fonts.label2]}>{anuncio.message}</Text> 
      </View>
    </TouchableOpacity>
  );
};

const AnunciosScreen = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primaryLightColor,
        padding: 15,
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
