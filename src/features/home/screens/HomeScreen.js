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

export const HomeScreen = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const { savedProfiles, toggleSave } = useSavedProfiles();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.intensePrimaryAccent,
        marginLeft: 10,
        marginRight: 10,
        borderColor: colors.textColor,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
      }}
    >
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={{ padding: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("INFO DEL SOLICITANTE", { profile: item })
            }
            style={{
              flex: 1,
              backgroundColor: colors.baseColor,
              borderWidth: 2,
              borderColor: colors.textColor,
              borderRadius: 5,
              marginTop: 50,
              marginHorizontal: 5,
              padding: 10,
              alignItems: "center",
              position: "relative",
              paddingTop: 50,
            }}
          >
            <TouchableOpacity
              onPress={() => toggleSave(item.id)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 2,
              }}
            >
              <Ionicons
                name={savedProfiles[item.id] ? "bookmark" : "bookmark-outline"}
                size={24}
                color={colors.textColor}
              />
            </TouchableOpacity>

            <Image
              source={{ uri: item.profileImage }}
              style={{
                width: 80,
                height: 80,
                borderColor: fonts.textColor,
                borderWidth: 2,
                borderRadius: 40,
                position: "absolute",
                top: -40,
                zIndex: 1,
              }}
            />

            <Text style={[fonts.h3]}>{item.name}</Text>
            <Text style={[fonts.label2]}>{item.age} años</Text>
            <Text style={[fonts.label2]}>{item.status}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
