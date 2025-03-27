
const Button2 = ({ label, iconName }) => {
    const { colors } = useTheme();
    return (
      <View
        style={{
          backgroundColor: colors.baseColor,
          paddingVertical: 10,
          paddingHorizontal: 15,
          elevation: 5,
          borderRadius: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Ionicons name={iconName} size={20} color={colors.textColor} />
            <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.textColor }}>
              {label}
            </Text>
          </View>
          <Ionicons name={"caret-forward-outline"} size={20} color={colors.textColor} />
        </View>
      </View>
    );
  };
  
  export default Button2;