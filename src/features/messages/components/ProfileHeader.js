import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
const ProfileHeader = ({ profile }) => {
  const { colors, fonts } = useTheme();

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        backgroundColor: colors.baseColor,
        borderRadius: 10,
      }}
      onPress={() =>
        navigation.navigate("Home", {
          screen: "HomeDetailScreen",
          params: { profile },
        })
      }
    >
      <Image
        source={{ uri: profile?.profileImage }}
        style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={[fonts.h3]}>{profile?.name}</Text>
        <Text style={[fonts.label1]}>
          {profile?.age} años
        </Text>
        <Text style={[fonts.label2]}>{profile?.shortDescription}</Text>
        <Text style={[fonts.label2]}>Tasa de interes preferida: {profile?.interestRate}</Text>
      
                    <Text style={[fonts.subheading, {fontSize:13}]}>Intereses:</Text>
      
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 5,
                        width: "100%",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {profile.investmentInterests.map((tag, index) => (
                        <View
                          key={index}
                          style={{
                            backgroundColor: colors.primaryLightColor,
                            paddingHorizontal: 10,
                            paddingVertical: 3,
                            borderRadius: 5,
                            flexGrow: 1, 
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={[
                              fonts.label2,
                              { fontSize: 12, textAlign: "center" },
                            ]}
                          >
                            {tag}
                          </Text>
                        </View>
                      ))}
                    </View>
      

      </View>
    </TouchableOpacity>
  );
};

export default ProfileHeader;
