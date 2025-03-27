import React from "react";
import { Text } from "react-native-paper";
import { Provider as PaperProvider, useTheme } from "react-native-paper";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import Card from "react-native-paper";
import { useSavedProfiles } from "../../../utils/SavedProfilesContext";
import { Ionicons } from "@expo/vector-icons";
import { profiles } from "../../../utils/DummyData";
import IconButton from "../components/IconButton";
import { Pressable } from "react-native";
import { useState } from "react";
export const HomeScreen = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const { savedProfiles, toggleSave } = useSavedProfiles();
  const [showOnlySaved, setShowOnlySaved] = useState(false);

  const filteredProfiles = showOnlySaved
  ? profiles.filter((profile) => savedProfiles[profile.id])
  : profiles;


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.secondaryLightColor,
        borderColor: colors.textColor,
      }}
    >

      <TouchableOpacity
        onPress={() => setShowOnlySaved((prev) => !prev)}
        style={{
          padding: 10,
          backgroundColor: colors.baseColor,
          alignItems: "center",
          elevation:5,
          borderRadius: 5,
        }}
      >
        <Text style={[fonts.subheading]}>
          {showOnlySaved ? "Mostrar todos" : "Mostrar guardados"}
        </Text>
      </TouchableOpacity>


      <FlatList
        data={filteredProfiles}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={{ padding: 10 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: colors.intensePrimaryAccent,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 10,
              borderRadius: 5,
              paddingTop: 50,
              position: "relative",
              elevation: 5,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("INFO DEL SOLICITANTE", { profile: item })
              }
              style={{
                flex: 1,
                backgroundColor: colors.baseColor,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                borderRadius: 5,
                padding: 15,
                alignItems: "center",
                paddingTop: 50,
              }}
            >
              <IconButton
                onPress={() => toggleSave(item.id)}
                iconName={
                  savedProfiles[item.id] ? "bookmark" : "bookmark-outline"
                }
                style={{ position: "absolute", top: 10, right: 15 }}
                color={colors.primaryLightColor}
              />

              <IconButton
                onPress={() =>
                  navigation.navigate("Mensajes", {
                    screen: "CHAT CON SOLICITANTE",
                    params: {
                      profileId: item.id,
                      name: item.name,
                    },
                  })
                }
                iconName="chatbubble-ellipses-outline"
                style={{ position: "absolute", top: 10, left: 15 }}
                color={colors.primaryLightColor}
              />

              <Image
                source={{ uri: item.profileImage }}
                style={{
                  width: 80,
                  height: 80,
                  elevation: 5,
                  borderRadius: 40,
                  position: "absolute",
                  top: -40,
                  zIndex: 1,
                }}
              />

              <Text style={[fonts.h3]}>{item.name}</Text>
              <Text style={[fonts.label2]}>{item.age} años</Text>
              <Text style={[fonts.label2]}>
                Necesita {item.requestedAmount}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
