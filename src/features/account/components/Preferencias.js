import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";


const Preferencias = () => {
  const { fonts, colors } = useTheme();

  return (
    <View
      style={{
        elevation: 5,
      }}
    >
      <View
        style={{
          backgroundColor: colors.intensePrimaryAccent,
          padding: 10,
          elevation: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            elevation: 5,
          }}
        >
          <Text style={[fonts.h3]}>PREFERENCIAS</Text>

          <Ionicons
            name={"caret-forward-outline"}
            size={20}
            color={colors.textColor}
          />
        </View>
      </View>

      <View style={{ padding: 10, backgroundColor: colors.baseColor }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[fonts.label2]}>Monto Solicitado:</Text>
          <Text style={[fonts.subheading]}>S/. 1000</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[fonts.label2]}>Tasa de Interés Ideal:</Text>
          <Text style={[fonts.subheading]}>4%</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[fonts.label2]}>Plazo de Tiempo Ideal:</Text>
          <Text style={[fonts.subheading]}>4 MESES</Text>
        </View>
      </View>
    </View>
  );
};

export default Preferencias;
