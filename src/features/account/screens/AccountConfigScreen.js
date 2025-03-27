import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { Button1 } from "../../home/components/Button1";
import { useState } from "react";
import InputCard from "../components/InputCard";
import Slider from "@react-native-community/slider";
import ActionButton from "../../messages/components/ActionButton";

const AccountConfigScreen = ({ navigation }) => {
  const { colors, fonts } = useTheme();

  const [money, setMoney] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);

  return (
    <View
      style={{
        padding: 15,
        gap: 20,
        backgroundColor: colors.baseColor,
        flex: 1,
      }}
    >
      <InputCard title="DESCRIPCIÓN" placeholder="Tu Descripción...." />

      <InputCard title="Ubicación" placeholder="Ej: Lima, Perú" />

      <View style={{ gap: 10 }}>
        <Text style={[fonts.subheading]}>Dinero dispuesto a dar</Text>
        <Slider
          style={{ width: "100%", height: 20 }}
          minimumValue={100}
          maximumValue={10000}
          step={100}
          value={money}
          onValueChange={(value) => setMoney(value)}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={colors.lightTextColor}
          thumbTintColor={colors.primary}
        />
        <Text style={[fonts.body1, { color: colors.lightTextColor }]}>
          S/ {money}
        </Text>
      </View>

      <View style={{ gap: 10 }}>
        <Text style={[fonts.subheading]}>Tasa de interés aceptable (%)</Text>
        <Slider
          style={{ width: "100%", height: 20 }}
          minimumValue={0}
          maximumValue={20}
          step={0.1}
          value={interestRate}
          onValueChange={(value) => setInterestRate(value)}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={colors.lightTextColor}
          thumbTintColor={colors.primary}
        />
        <Text style={[fonts.body1, { color: colors.lightTextColor }]}>
          {interestRate.toFixed(1)}%
        </Text>
      </View>

      <View style={{ gap: 10 }}>
        <Text style={[fonts.subheading]}>
          Plazo de Prestamo Preferido (meses){" "}
        </Text>
        <Slider
          style={{ width: "100%", height: 20 }}
          minimumValue={0}
          maximumValue={20}
          step={0.1}
          value={interestRate}
          onValueChange={(value) => setInterestRate(value)}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={colors.lightTextColor}
          thumbTintColor={colors.primary}
        />
        <Text style={[fonts.body1, { color: colors.lightTextColor }]}>
          {interestRate.toFixed(1)} meses
        </Text>
      </View>


      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

      <Button1 label="Go Back" onPress={() => navigation.goBack()} />


        <View style={{ alignSelf: "flex-start" }}>
          <ActionButton
            onPress={() => console.log("guardar")}
            iconName="save-outline"
            text="Guardar"
            backgroundColor={colors.intensePrimaryAccent}
            textColor={colors.textColor}
          />
        </View>
      </View>



    </View>
  );
};

export default AccountConfigScreen;
