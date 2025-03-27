import React from "react";
import { View, Text, FlatList } from "react-native";
import { useTheme } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { formatDistanceToNow, parseISO } from "date-fns"; 

const anuncios = [
  {
    id: "1",
    title: "¡Puntaje Subido!",
    message: "🎉 ¡Tu puntaje ha subido! Ahora tienes más confianza en la app.",
    date: "2025-03-27T10:00:00Z",
  },
  {
    id: "2",
    title: "Nuevo Préstamo Aprobado",
    message:
      "🏦 ¡Felicidades! El banco confía más en ti y ahora puedes pedir un préstamo mayor.",
    date: "2025-03-15T12:00:00Z",
  },
  {
    id: "3",
    title: "Recomendación Recibida",
    message:
      "👍 Has recibido una recomendación de un usuario confiable. ¡Sigue así!",
    date: "2025-02-27T09:00:00Z",
  },
  {
    id: "4",
    title: "Redes Sociales Validadas",
    message:
      "🔗 Has validado tus redes sociales. Ahora eres más confiable en la comunidad.",
    date: "2025-01-15T16:00:00Z", 
  },
  {
    id: "5",
    title: "Nuevo Logro",
    message: "🏅 ¡Felicidades! Has alcanzado un nuevo logro en la app.",
    date: "2025-03-20T14:30:00Z", },
  {
    id: "6",
    title: "Nuevo Mensaje",
    message: "📩 Has recibido un nuevo mensaje de un amigo.",
    date: "2025-03-18T08:00:00Z",
  },
];

const AnuncioItem = ({ anuncio }) => {
  const { colors, fonts } = useTheme();

  const dateDistance = formatDistanceToNow(parseISO(anuncio.date), { addSuffix: true });

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
        <Text style={[fonts.label2, {textAlign:"right", marginTop:5}] }>{dateDistance}</Text> 
      </View>
    </TouchableOpacity>
  );
};

const AnunciosScreen = () => {
  const { colors } = useTheme();
  const sortedAnuncios = anuncios.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primaryLightColor,
        padding: 15,
      }}
    >
      <FlatList
        data={sortedAnuncios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AnuncioItem anuncio={item} />}
      />
    </View>
  );
};

export default AnunciosScreen;
